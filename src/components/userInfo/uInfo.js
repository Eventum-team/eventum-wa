import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import "./index.css";
import { Card } from 'antd';
import picture from "../../assets/backgrounds/william-recinos-qtYhAQnIwSE-unsplash.jpg";

const { Meta } = Card;
const UserInfo = (props) => {
  const { name, phone, age, career } = props;
  return (
    <Card title="Información del usuario"
      style={{ width: '100%' }}
      >
      <p>Nombre: {name}</p>
      <p>Teléfono: {phone}</p>
      <p>Edad: {age} años</p>
      <p>Carrera: {career}</p>
    </Card>
  );
};

export default UserInfo;
