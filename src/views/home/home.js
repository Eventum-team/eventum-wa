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
  events{
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
    console.log(data.events);
    for (let i = 0; i < data.events.length; i++) {
      var photo = "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      if (data.events[i].photo!=null){
        photo = data.events[i].photo;
      }
      evList.push({
        href: '/eventProfile/'+data.events[i].id,
        name: data.events[i].name,
        picture: photo,
        description: data.events[i].description,
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
