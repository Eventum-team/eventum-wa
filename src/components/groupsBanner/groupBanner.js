import React from "react";
import { Layout, Menu } from "antd";
import Icon from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import Background from "../../assets/backgrounds/priscilla-du-preez-XkKCui44iM0-unsplash.jpg";
const { Header, Footer, Sider, Content } = Layout;
const GroupsBanner = () => {
  console.log(Background);
  return (
    <div>
      <Layout
        style={{
          backgroundImage: "url(" + Background + ")",
          width: "100%",
          height: "600px",
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
            La universidad cuenta con una gran cantidad de grupos
          </p>
          <p style={{ textAlign: "center", fontSize: "200%", color: "white" }}>
            Busca un grupo por nombre o por categoría
          </p>
        </Content>
      </Layout>
    </div>
  );
};

export default GroupsBanner;
