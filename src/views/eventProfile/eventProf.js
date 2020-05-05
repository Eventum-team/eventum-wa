import React from "react";
import EventMap from "../../components/map";
import EventCard from "../../components/eventCard";
import EventComments from "../../components/eventComments";
import EventBanner from "../../components/eventBanner";
import AssistList from "../../components/assistList";
import ContentLayout from "../../components/contentLayout";
import { Layout } from 'antd';
import { Row, Col, Avatar } from 'antd';
import gql from 'graphql-tag';
import {useQuery} from "@apollo/react-hooks";
import Spinner from "../../components/spinner";
//updateUserEvent(userId: Int, eventId: Int, input: UserEventInputUpdate): Message!
//deleteUserEvent(userId: Int, eventId: Int): Message!
//GRAPHQL


const EVENT_PROFILE_QUERY = gql`
query eProfile($eventId: ID!, $userId: ID!){
  eventProfile(eventId: $eventId, userId: $userId){
    name
    description
    eventStartDate
    eventFinishDate
    latitude
    longitude
    comments{
      text
      likes
      dislikes
      name
      idUser
    }
    assistant{
      id
      name
    }
  }
}
`;
const GET_USER_NAME = gql`
query getUserProfile($userId: Int!) {
  userProfile(userId: $userId){
    name
  }
}
`;
const activeuser = parseInt(localStorage.getItem('userId'));


const EventProfile = ({ match }) => {

  const evId=match.params.id

  const { loading, error, data } = useQuery(EVENT_PROFILE_QUERY, {
    variables: {
      eventId: evId,
      userId: activeuser,
    }
  });

  const { data: data2, error: error2, loading: loading2} = useQuery(GET_USER_NAME, {
    variables: {
      userId: activeuser,
    }
  });

  var evAsist = false
  var load = true
  if(!loading && !loading2){load=false}
  const evPhoto = "../../assets/backgrounds/ben-duchac-96DW4Pow3qI-unsplash.jpg"

  //PRUEBA PARA ASISTENTES
  const aList = [];
  const idAList = [];
  if (!load){
    console.log(data);
    for (let i = 0; i < data.eventProfile.assistant.length; i++) {
      idAList.push(parseInt(data.eventProfile.assistant[i].id));
      aList.push({
        href: '/userProfile/'+data.eventProfile.assistant[i].id,
        name: data.eventProfile.assistant[i].name,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      });
    }
  }
  if (!load){evAsist= idAList.includes(activeuser)}
  //PRUEBA PARA COMENTARIOS
  const commentList = [];
  if (!loading){
    for (let i = 0; i < data.eventProfile.comments.length; i++) {
      commentList.push({
        href: '/userProfile/'+data.eventProfile.comments[i].idUser,
        name: data.eventProfile.comments[i].name,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        text:data.eventProfile.comments[i].text,
        likes: data.eventProfile.comments[i].likes,
        dislikes: data.eventProfile.comments[i].dislikes,
      });
    }
  }

  return (
    <div>
      {load && <Spinner />}
      {!load && (
    <React.Fragment>
      <EventBanner name= {data.eventProfile.name} photo={evPhoto}/>

        <ContentLayout>
          <Row>
            <EventCard
              name= {data.eventProfile.name}
              description= {data.eventProfile.description}
              start= {data.eventProfile.eventStartDate}
              finish= {data.eventProfile.eventFinishDate}
              asist= {evAsist}
              actUser= {activeuser}
              eventID= {evId}
              />
          </Row>
          <Row>
            <Col flex={10}><EventMap
              lat={parseInt(data.eventProfile.latitude)}
              lng={parseInt(data.eventProfile.longitude)}/>
            </Col>
            <Col flex={2}><AssistList data={aList}/></Col>
          </Row>
          <Row>
            <EventComments
              name={data2.userProfile.name}
              idu={activeuser}
              data={commentList}
              ide={evId}
              pending={loading}
              />
          </Row>
        </ContentLayout>

      </React.Fragment>
    )}
  </div>
  );
};


export default EventProfile;
