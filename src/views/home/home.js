import React from "react";
import HomeBanner from '../../components/homeBanner'
import HomeEvents from '../../components/homeEvents'
import { Layout } from 'antd';
import ContentLayout from "../../components/contentLayout";
import { Row, Col, Avatar } from 'antd';
import Spinner from "../../components/spinner";
import gql from 'graphql-tag';
import {  useQuery } from "@apollo/react-hooks";

const { Header, Footer, Sider, Content } = Layout;

const GET_EVENTS = gql`
query {
  allEvents{
    id
    name
    description
    url
    photo
  }
}
`;

const Home = () => {
  // in home

  //PRUEBA PARA eventos
  const { loading, error, data } = useQuery(GET_EVENTS);
  const evList = [];

  if (!loading){
    for (let i = 0; i < data.allEvents.length; i++) {
      var photo = "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      if (data.allEvents[i].photo!=null){
        photo = data.allEvents[i].photo;
      }
      evList.push({
        href: '/eventProfile/'+data.allEvents[i].id,
        name: data.allEvents[i].name,
        picture: photo,
        description: data.allEvents[i].description,
      });
    }
  }

  return (
    <React.Fragment>
      <HomeBanner/>
      <div>
        {loading && <Spinner />}
        {!loading && (
          <ContentLayout>
            <HomeEvents data={evList} />
          </ContentLayout>
        )}
      </div>
    </React.Fragment>
  );
};

export default Home;
