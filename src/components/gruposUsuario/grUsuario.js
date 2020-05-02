import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import "./index.css";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { List, Avatar, Space,Card } from 'antd';
const { Meta } = Card;
const GrupoUsuario = (props) => {

  return (
    <Card title="Mis Grupos"
      style={{ width: '100%' }}
      >
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={props.data}
        renderItem={item => (
          <List.Item
            key={item.name}
            extra={
              <img
                width={272}
                alt="logo"
                src={item.picture}
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.name}</a>}
            />
            {item.description}
          </List.Item>
        )}
      />
    </Card>
  );
};


export default GrupoUsuario;
