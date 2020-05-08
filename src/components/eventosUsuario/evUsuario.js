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
const EventoUsuario = (props) => {
  const isActiveUser = props.isActiveUser;
  return (
    <Card
      title="Mis Eventos"
      style={{ width: "100%" }}
      extra={
        <div>
          {isActiveUser && <Link to="/createEvent">
            <Button type="primary" shape="circle" icon={<PlusOutlined />} />
          </Link>}
        </div>
      }
    >
      <List
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 8,
        }}
        dataSource={props.data}
        grid={{
          gutter: 10,
        }}
        renderItem={(item) => (
          <List.Item>
            <Card
              style={{ width: "300px" }}
              cover={<img alt="example" src={item.picture} />}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                title={<Link to={item.href}>{item.name}</Link>}
                description={item.description}
              />
            </Card>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default EventoUsuario;
