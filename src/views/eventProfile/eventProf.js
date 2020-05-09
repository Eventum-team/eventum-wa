import React from "react";
import EventMap from "../../components/map";
import EventCard from "../../components/eventCard";
import EventComments from "../../components/eventComments";
import EventBanner from "../../components/eventBanner";
import AssistList from "../../components/assistList";
import ContentLayout from "../../components/contentLayout";
import { Layout } from "antd";
import { Row, Col, Avatar } from "antd";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import Spinner from "../../components/spinner";
import { useDispatch, useSelector } from "react-redux";
//updateUserEvent(userId: Int, eventId: Int, input: UserEventInputUpdate): Message!
//deleteUserEvent(userId: Int, eventId: Int): Message!
//GRAPHQL

const EVENT_PROFILE_QUERY = gql`
  query eProfile($eventId: ID!, $userId: ID!) {
    eventProfile(eventId: $eventId, userId: $userId) {
      name
      photo
      description
      eventStartDate
      eventFinishDate
      latitude
      longitude
      comments {
        text
        likes
        dislikes
        name
        idUser
      }
      assistant {
        id
        name
        photo
      }
    }
  }
`;
const GET_USER_NAME = gql`
  query getUserProfile($userId: Int!) {
    userProfile(userId: $userId) {
      name
    }
  }
`;


//https://source.unsplash.com/random
const EventProfile = ({ match }) => {
  const evId = match.params.id;
  const activeuser = parseInt(useSelector(state => state.userId));
  console.log(activeuser)

  const { loading, error, data , refetch} = useQuery(EVENT_PROFILE_QUERY, {
    variables: {
      eventId: evId,
      userId: activeuser,
    },
  });

  const { data: data2, error: error2, loading: loading2 } = useQuery(
    GET_USER_NAME,
    {
      variables: {
        userId: activeuser,
      },
    }
  );

  var evAsist = false;
  var load = true;
  if (!loading && !loading2) {
    load = false;
  }
  var evPhoto = "https://source.unsplash.com/random";
  if (!load) {
    if (data.eventProfile.photo != null) {
      evPhoto = data.eventProfile.photo;
    }
  }

  //PRUEBA PARA ASISTENTES
  const aList = [];
  const idAList = [];
  if (!load) {
    console.log(data);
    for (let i = 0; i < data.eventProfile.assistant.length; i++) {
      var photo =
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";
      if (data.eventProfile.assistant[i].photo != null) {
        photo = data.eventProfile.assistant[i].photo;
      }
      console.log(data.eventProfile.assistant[i].photo);
      idAList.push(parseInt(data.eventProfile.assistant[i].id));
      aList.push({
        href: "/userProfile/" + data.eventProfile.assistant[i].id,
        name: data.eventProfile.assistant[i].name,
        avatar: photo,
      });
      console.log(aList);
      
    }
  }
  if (!load) {
    evAsist = idAList.includes(activeuser);
  }
  //PRUEBA PARA COMENTARIOS
  const commentList = [];
  if (!loading) {
    for (let i = 0; i < data.eventProfile.comments.length; i++) {
      commentList.push({
        href: "/userProfile/" + data.eventProfile.comments[i].idUser,
        name: data.eventProfile.comments[i].name,
        text: data.eventProfile.comments[i].text,
        likes: data.eventProfile.comments[i].likes,
        dislikes: data.eventProfile.comments[i].dislikes,
      });
    }
  }


  const refetchProfile = () => {
    refetch();
  };

  return (
    <div>
      {load && <Spinner />}
      {!load && (
        <React.Fragment>
          <EventBanner name={data.eventProfile.name} photo={evPhoto} />

          <ContentLayout>
            <Row>
              <EventCard
                name={data.eventProfile.name}
                description={data.eventProfile.description}
                start={data.eventProfile.eventStartDate}
                finish={data.eventProfile.eventFinishDate}
                asist={evAsist}
                actUser={activeuser}
                eventID={evId}
                refetchProfile={refetchProfile}
              />
            </Row>
            <Row>
              <Col flex={10}>
                <EventMap
                  lat={parseFloat(data.eventProfile.latitude)}
                  lng={parseFloat(data.eventProfile.longitude)}
                />
              </Col>
              <Col flex={2}>
                <AssistList 
                  data={aList} 
                  />
              </Col>
            </Row>
            <Row>
              <EventComments
                name={data2.userProfile.name}
                idu={activeuser}
                data={commentList}
                ide={evId}
                pending={loading}
                refetchProfile={refetchProfile}
              />
            </Row>
          </ContentLayout>
        </React.Fragment>
      )}
    </div>
  );
};

export default EventProfile;
