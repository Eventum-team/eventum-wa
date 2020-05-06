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
import { Link } from "react-router-dom";
import { List, Avatar, Space, Card, Button } from "antd";
const { Meta } = Card;
const HomeEvents = (props) => {
  return (
    <>
      <h1 style={{ fontSize: 35, textAlign: "center" }}>Eventos del dia</h1>
      <List
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 8,
        }}
        dataSource={props.data}
        grid={{ gutter: 10, column: 4 }}
        renderItem={(item) => (
          <List.Item>
            <Card
              style={{ width: "300px" }}
              cover={<img alt="example" src={item.picture} />}
            >
              <Meta
                title={<Link to={item.href}>{item.name}</Link>}
                description={item.description}
              />
            </Card>
          </List.Item>
        )}
      />
    </>
  );
};

export default HomeEvents;
