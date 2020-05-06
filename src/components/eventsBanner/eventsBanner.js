import React from "react";
import { Layout, Menu } from "antd";
import Icon from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import Background from "../../assets/backgrounds/teemu-paananen-bzdhc5b3Bxs-unsplash.jpg";
const { Header, Footer, Sider, Content } = Layout;
const EventsBanner = () => {
  console.log(Background);
  return (
    <div>
      <Layout
        style={{
          backgroundImage: "url(" + Background + ")",
          width: "100%",
          height: "500px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: "66,64%",
        }}
      >
        <Header></Header>
        <Content>
          <p
            style={{
              textAlign: "center",
              marginTop: "10%",
              fontSize: "400%",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Conoce nuevos eventos o busca alguno según tus preferencias
          </p>
        </Content>
      </Layout>
    </div>
  );
};

export default EventsBanner;
