import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Navbar from "../navbar";
import "./index.css";
import EventumIcon from "../../assets/icons/eventumIcon.png";

const { Content, Footer } = Layout;

const MainLayout = (props) => {
  return (
    <Layout className="mainBackground" style={{ minHeight: "100vh" }}>
      <Navbar />
      <div className="mainLayout">{props.children}</div>
      <Footer className="footer">
        <div>
          <img src={EventumIcon} style={{ height: 100 }} />
        </div>
        Eventum - Software Architecture 2020-1
      </Footer>
    </Layout>
  );
};

export default MainLayout;

{
  /* <Content style={{ padding: "0 50px", marginTop: 64 }}>
  <BreadCrumb />
  <div className="mainLayout">{props.children}</div>
</Content>; */
}
