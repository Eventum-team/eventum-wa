import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import "./index.css";
import { Card, Descriptions } from "antd";
import picture from "../../assets/backgrounds/william-recinos-qtYhAQnIwSE-unsplash.jpg";

const { Meta } = Card;
const UserInfo = (props) => {
  const { name, phone, age, career } = props;
  return (
    // <Card title="Información del usuario" style={{ width: "100%" }}>
    //   <p>Nombre: {name}</p>
    //   <p>Teléfono: {phone}</p>
    //   <p>Edad: {age} años</p>
    //   <p>Carrera: {career}</p>
    // </Card>
    <Descriptions bordered style={{ width: "100%", marginBottom: 20 }}>
      <Descriptions.Item span={3} label="Nombre">
        {name}
      </Descriptions.Item>
      <Descriptions.Item span={3} label="Telefono">
        {phone}
      </Descriptions.Item>
      <Descriptions.Item span={3} label="Edad">
        {age}
      </Descriptions.Item>
      <Descriptions.Item span={3} label="Carrera">
        {career}
      </Descriptions.Item>
    </Descriptions>
  );
};

export default UserInfo;
