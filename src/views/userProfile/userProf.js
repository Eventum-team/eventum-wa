import React from "react";
import EventMap from "../../components/map";
import UserHeader from "../../components/userHeader";
import UserInfo from "../../components/userInfo";
import EventoUsuario from "../../components/eventosUsuario";
import GrupoUsuario from "../../components/gruposUsuario";
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

////Para info de usuario
const userName = "NOMBRE APELLIDO"
const phone = 30300020
const age = 50
const career = "ing de sistemas"





const UserProfile = props => {
  //PRUEBA PARA frupos

  const grList = [];
  for (let i = 0; i < 23; i++) {
    grList.push({
      href: 'http://ant.design',
      name: `Group ${i}`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      picture: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      description:'DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription',
    });
  }
  //PRUEBA PARA eventos
  const evList = [];
  for (let i = 0; i < 23; i++) {
    evList.push({
      href: 'http://ant.design',
      name: `Event ${i}`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      picture: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      description:'DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription',
    });
  }


  return (

    <ContentLayout>
      <Row>
        <UserHeader name={userName}/>
      </Row>
      <Row>
        <UserInfo name={userName} phone={phone} age={age} career={career} />
      </Row>
      <Row>
        <EventoUsuario data={evList} />
      </Row>
      <Row>
        <GrupoUsuario data={grList} />
      </Row>

    </ContentLayout>
  );
};


export default UserProfile;
