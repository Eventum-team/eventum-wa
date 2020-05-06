import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import "./index.css";
import { Card } from "antd";

const { Meta } = Card;
const UserHeader = (props) => {
  return (
    <Card
      style={{ width: "100%", background: "transparent" }}
      cover={
        <div className="landscape">
          <img
            className="center"
            alt="picture"
            src={props.photo}
            style={{ width: "100%" }}
          />
        </div>
      }
    >
      <Meta title={props.name} style={{ textAlign: "center", fontSize: 40 }} />
    </Card>
  );
};

export default UserHeader;
