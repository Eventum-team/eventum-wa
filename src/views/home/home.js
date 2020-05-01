import React from "react";
import HomeBanner from '../../components/homeBanner'
import HomeEvents from '../../components/homeEvents'
import { Layout } from 'antd';
import ContentLayout from "../../components/contentLayout";
import { Row, Col, Avatar } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const Home = () => {
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
    <React.Fragment>
      <HomeBanner/>
      <div>
        <ContentLayout>
          <HomeEvents data={evList} />
        </ContentLayout>
      </div>
    </React.Fragment>
  );
};

export default Home;
