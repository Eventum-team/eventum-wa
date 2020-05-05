import React from "react";
import { Layout, Menu } from "antd";
import Icon from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import Background from "../../assets/backgrounds/ben-duchac-96DW4Pow3qI-unsplash.jpg"
const { Header, Footer, Sider, Content } = Layout;
const HomeBanner= () => {
  return (
    <div  >
      <Layout
        style={{
                backgroundImage: "url(" + Background + ")",
                width: "100%",
                height:"500px",
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
                      fontWeight: "bold"}}>Bienvenido a Eventum</p>
              <p style={{textAlign:"center",
                      fontSize: "200%",
                      color: "white"}}>Encuentra toda la información que necesites sobre eventos y grupos de la universidad</p>
        </Content>
      </Layout>
    </div>

  );
};

export default HomeBanner;
