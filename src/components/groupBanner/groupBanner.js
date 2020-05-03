
import React from "react";
import { Layout, Menu } from "antd";
import Icon from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { OmitProps } from "antd/lib/transfer/renderListBody";
const { Header, Footer, Sider, Content } = Layout;

const EventBanner= (props) => {
  return (
    <div  >
      <Layout
        style={{
                backgroundImage: "url("+require("../../assets/backgrounds/ben-duchac-96DW4Pow3qI-unsplash.jpg")+")",
                width: "100%",
                height:"400px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                paddingTop: "66,64%",
                backgroundColor: "black",
                backgroundBlendMode: "hard-light"  }}>
        <Header></Header>
        <Content>
              <p style={{textAlign:"center",
                      marginTop: "10%",
                      fontSize: "400%",
                      color: "white",
                      fontWeight: "bold"}}>{props.name}</p>
              <img
                 alt="example"
                src={props.photo}/>

        </Content>
      </Layout>
    </div>

  );
};

export default EventBanner;
