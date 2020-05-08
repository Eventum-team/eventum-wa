import React, {useEffect}from "react";
import EventMap from "../../components/map";
import UserHeader from "../../components/userHeader";
import UserInfo from "../../components/userInfo";
import EventoUsuario from "../../components/eventosUsuario";
import GrupoUsuario from "../../components/gruposUsuario";
import ContentLayout from "../../components/contentLayout";
import { Row, Col, Avatar } from "antd";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import Spinner from "../../components/spinner";
import "./index.css";
import {  useSelector } from "react-redux";

//GRAPHQL
const GET_USER_PROFILE = gql`
  query getUserProfile($userId: Int!) {
    userProfile(userId: $userId) {
      id
      name
      career
      age
      phone_number
      photo
      groupsFollowing {
        id_group
        id_type
        type
        name
        description
        photo
      }
      eventsCreated {
        id
        name
        description
        photo
      }
    }
  }
`;

const UserProfile = ({ match }) => {
  //PRUEBA PARA grupos
  const uId = match.params.id;
  const activeuser = useSelector(state => state.userId);
  const isActiveUser = uId == activeuser;

  const { loading, error, data, refetch } = useQuery(GET_USER_PROFILE, {
    variables: {
      userId: parseInt(uId),
    },
  });


  //https://source.unsplash.com/random
  var profilePhoto = "https://source.unsplash.com/random";
  if (!loading) {
    if (data.userProfile.photo != null) {
      profilePhoto = data.userProfile.photo;
    }
  }
  const grList = [];
  if (!loading) {
    for (let i = 0; i < data.userProfile.groupsFollowing.length; i++) {
      var groupPhoto =
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png";
      if (data.userProfile.groupsFollowing[i].photo != null) {
        groupPhoto = data.userProfile.groupsFollowing[i].photo;
      }
      grList.push({
        href: `/groupProfile/${data.userProfile.groupsFollowing[i].id_group}`, //'/rutagrupos/'+data.userProfile.groupsFollowing[i].id_group,
        name: data.userProfile.groupsFollowing[i].name,
        picture: groupPhoto,
        description: data.userProfile.groupsFollowing[i].description,
      });
    }
  }
  //PRUEBA PARA eventos
  const evList = [];
  if (!loading) {
    for (let i = 0; i < data.userProfile.eventsCreated.length; i++) {
      var eventPhoto =
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png";
      if (data.userProfile.eventsCreated[i].photo != null) {
        eventPhoto = data.userProfile.eventsCreated[i].photo;
      }
      evList.push({
        href: "/eventProfile/" + data.userProfile.eventsCreated[i].id,
        name: data.userProfile.eventsCreated[i].name,
        picture: eventPhoto,
        description: data.userProfile.eventsCreated[i].description,
      });
    }
  }

  useEffect(() => {
    refetch();
  }, []);

  

  return (
    <div>
      {loading && <Spinner />}
      {!loading && (
        <ContentLayout>
          <Row className="profileBackground">
            <UserHeader name={data.userProfile.name} photo={profilePhoto} />
          </Row>
          <Row>
            <UserInfo
              name={data.userProfile.name}
              phone={data.userProfile.phone_number}
              age={data.userProfile.age}
              career={data.userProfile.career}
            />
          </Row>
          <Row style={{ marginBottom: 20 }}>
            <EventoUsuario data={evList} isActiveUser={isActiveUser}/>
          </Row>
          <Row style={{ marginBottom: 20 }}>
            <GrupoUsuario data={grList} isActiveUser={isActiveUser}/>
          </Row>
        </ContentLayout>
      )}
    </div>
  );
};

export default UserProfile;
