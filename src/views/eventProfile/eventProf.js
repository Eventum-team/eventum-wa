import React from "react";
import EventMap from "../../components/map";
import EventCard from "../../components/eventCard";
import EventComments from "../../components/eventComments";
import EventBanner from "../../components/eventBanner";
import AssistList from "../../components/assistList";
import ContentLayout from "../../components/contentLayout";
import { Layout } from 'antd';
import { Row, Col, Avatar } from 'antd';
//import gql from 'graphql-tag';
//import {  useMutation, useQuery } from "@apollo/react-hooks";

//GRAPHQL
/*
const EVENT_PROFILE_QUERY = gql`
query eProfile($eventId: int!, $userId: int!){
  eveventProfile(eventId: $eventId, userId: $userId){
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
    }
    assistant{
      name
    }
  }
}
`;
const { loading, error, data } = useQuery(FETCH_GROUPS_QUERY);

*/
////Para mapa
const latitud = 59.95;
const longitud = 30.33;
const center1 = {
  lat: latitud,
  lng: longitud
};

////Para presentaciòn
const evName = "NombreEvento"
const evDesc = "DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription"
const evStart = "2020-04-02"
const evFinish = "2020-04-03"
const evAsist = false
const evPhoto = "../../assets/backgrounds/ben-duchac-96DW4Pow3qI-unsplash.jpg"




const EventProfile = props => {
  //PRUEBA PARA ASISTENTES
  const aList = [];
  for (let i = 0; i < 23; i++) {
    aList.push({
      href: 'http://ant.design',
      name: `Assistant ${i}`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    });
  }
  //PRUEBA PARA COMENTARIOS
  const commentList = [];
  for (let i = 0; i < 23; i++) {
    commentList.push({
      href: 'http://ant.design',
      name: `Comment Name ${i}`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      text:'Comment text',
      likes: '153',
      dislikes: '2',
    });
  }


  return (
    <React.Fragment>
      <EventBanner name= {evName} photo={evPhoto}/>
      <div>
        <ContentLayout>
          <Row>
            <EventCard
              name= {evName}
              description= {evDesc}
              start= {evStart}
              finish= {evFinish}
              asist= {evAsist}
              />
          </Row>
          <Row>
            <Col flex={10}><EventMap
              lat={latitud}
              lng={longitud}
              center= {center1}/>
            </Col>
            <Col flex={2}><AssistList data={aList}/></Col>
          </Row>
          <Row>
            <EventComments data={commentList}/>
          </Row>
        </ContentLayout>
        </div>
      </React.Fragment>
  );
};


export default EventProfile;
