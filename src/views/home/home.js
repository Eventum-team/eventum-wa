import React from "react";
import HomeBanner from '../../components/homeBanner'
import HomeEvents from '../../components/homeEvents'
import { Layout } from 'antd';
import ContentLayout from "../../components/contentLayout";
import { Row, Col, Avatar } from 'antd';
import Spinner from "../../components/spinner";
import gql from 'graphql-tag';
import {  useQuery } from "@apollo/react-hooks";
import store from "../../data/redux/store";

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
  console.log("In home ----------------------------------------------");
  console.log(store.getState());
  console.log("In home ----------------------------------------------");




  //PRUEBA PARA eventos
  const { loading, error, data } = useQuery(GET_EVENTS);
  console.log(data);
  const evList = [];

  if (!loading){
    for (let i = 0; i < data.events.length; i++) {
      evList.push({
        href: 'http://ant.design',
        name: data.events[i].name,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        picture: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
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
