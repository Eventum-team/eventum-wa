import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import "./index.css";
import { Card } from 'antd';
import picture from "../../assets/backgrounds/william-recinos-qtYhAQnIwSE-unsplash.jpg";

const { Meta } = Card;
const UserHeader = (props) => {
  return (
    <Card
      style={{ width: "100%" }}
      cover={<div className="landscape"><img className="center" alt="picture" src={picture} /></div>}
    >
      <Meta title={props.name} style={{textAlign: 'center'}}/>
    </Card>
  );
};

export default UserHeader;
