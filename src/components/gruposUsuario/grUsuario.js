import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import "./index.css";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { List, Avatar, Space, Card, Button } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;
const GrupoUsuario = (props) => {
  const isActiveUser = props.isActiveUser;
  return (
    <Card
      title="Mis Grupos"
      style={{ width: "100%" }}
      extra={
        <div>
          {isActiveUser && <Link to="/createGroup">
            <Button type="primary" shape="circle" icon={<PlusOutlined />} />
          </Link>
          }
        </div>
      }
    >
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={props.data}
        renderItem={(item) => (
          <List.Item
            key={item.name}
            extra={<img width={272} alt="logo" src={item.picture} />}
          >
            <List.Item.Meta title={<Link to={item.href}>{item.name}</Link>} />
            {item.description}
          </List.Item>
        )}
      />
    </Card>
  );
};

export default GrupoUsuario;
