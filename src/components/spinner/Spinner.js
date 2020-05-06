import React from "react";
import { Spin } from "antd";
import "./index.css";

const Spinner = () => {
  return (
    <div className="spinner" style={{ height: "100%" }}>
      <Spin size="small" />
      <Spin />
      <Spin size="large" />
    </div>
  );
};

export default Spinner;
