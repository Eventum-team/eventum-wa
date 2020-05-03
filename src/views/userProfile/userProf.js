import React from "react";
import EventMap from "../../components/map";
import UserHeader from "../../components/userHeader";
import UserInfo from "../../components/userInfo";
import EventoUsuario from "../../components/eventosUsuario";
import GrupoUsuario from "../../components/gruposUsuario";
import ContentLayout from "../../components/contentLayout";
import { Layout } from 'antd';
import { Row, Col, Avatar } from 'antd';
import gql from 'graphql-tag';
import {useQuery} from "@apollo/react-hooks";
import Spinner from "../../components/spinner";

//GRAPHQL
const GET_USER_PROFILE = gql`
query getUserProfile($userId: Int!) {
  userProfile(userId: $userId){
    id
    name
    career
    age
    phone_number
    groupsFollowing{
      id_group
      id_type
      type
      name
      description
    }
    eventsCreated {
      id
      name
      description
    }
  }
}
`;




const UserProfile = ({ match }) => {
  //PRUEBA PARA grupos
  const uId=match.params.id
  const { loading, error, data } = useQuery(GET_USER_PROFILE, {
    variables: {
      userId: parseInt(uId),
    }
  });

  const grList = [];
  if (!loading){
    for (let i = 0; i < data.userProfile.groupsFollowing.length; i++) {
      grList.push({
        href: 'http://ant.design',//'/rutagrupos/'+data.userProfile.groupsFollowing[i].id_group,
        name: data.userProfile.groupsFollowing[i].name,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        picture: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        description: data.userProfile.groupsFollowing[i].description,
      });
    }
  }
  //PRUEBA PARA eventos
  const evList = [];
  if (!loading){
    for (let i = 0; i < data.userProfile.eventsCreated.length; i++) {
      evList.push({
        href: '/eventProfile/'+data.userProfile.eventsCreated[i].id,
        name: data.userProfile.eventsCreated[i].name,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        picture: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        description:data.userProfile.eventsCreated[i].description,
      });
    }
  }


  return (
    <div>
      {loading && <Spinner />}
      {!loading && (
      <ContentLayout>
        <Row>
          <UserHeader name={data.userProfile.name}/>
        </Row>
        <Row>
          <UserInfo name={data.userProfile.name} phone={data.userProfile.phone_number} age={data.userProfile.age} career={data.userProfile.career} />
        </Row>
        <Row>
          <EventoUsuario data={evList} />
        </Row>
        <Row>
          <GrupoUsuario data={grList} />
        </Row>
      </ContentLayout>
      )}
    </div>
  );
};


export default UserProfile;
