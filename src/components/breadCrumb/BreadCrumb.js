import React from "react";
import { Breadcrumb } from "antd";

const BreadCrumb = (props) => {
  const elements = [" "];
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      {elements.map((item, index) => (
        <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadCrumb;
