import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import "./index.css";
import { EditOutlined, EllipsisOutlined, SettingOutlined, PlusOutlined} from '@ant-design/icons';
import { List, Avatar, Space,Card , Button} from 'antd';
const { Meta } = Card;
const HomeEvents = (props) => {

  return (
    <Card title="Eventos del día"
      style={{ width: '100%' }}>
      <List
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 8,
          }}
          dataSource={props.data}
          grid={{
                gutter: 10,
              }}
          renderItem={item => (
            <List.Item>
            <Card
                style={{ width: "300px" }}
                cover={
                  <img
                    alt="example"
                    src={item.picture}
                  />
                }
              >
                <Meta
                  title={<a href={item.href}>{item.name}</a>}
                  description={item.description}
                />
              </Card>
            </List.Item>
          )}
        />
      </Card>
  );
};


export default HomeEvents;
