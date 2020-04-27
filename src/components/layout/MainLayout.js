import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Navbar from "../navbar";
import BreadCrumb from "../breadCrumb";
import "./index.css";
const { Content, Footer } = Layout;

const MainLayout = (props) => {
  return (
    <Layout className="mainBackground" style={{ minHeight: "100vh" }}>
      <Navbar />
      <Content style={{ padding: "0 50px", marginTop: 64 }}>
        <BreadCrumb />
        <div className="mainLayout">{props.children}</div>
      </Content>
      <Footer className="footer">Eventum - Software Architecture 2020-1</Footer>
    </Layout>
  );
};

export default MainLayout;
