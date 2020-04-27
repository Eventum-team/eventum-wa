import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import "./index.css";

const ContentLayout = (props) => {
  return <div className="contentLayout">{props.children}</div>;
};

export default ContentLayout;
