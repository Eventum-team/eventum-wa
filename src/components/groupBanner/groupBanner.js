
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
                backgroundImage: "url("+props.photo+")",
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

        </Content>
      </Layout>
    </div>

  );
};

export default EventBanner;
