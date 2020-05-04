import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import "./index.css";
import { EditOutlined, EllipsisOutlined, SettingOutlined, PlusOutlined} from '@ant-design/icons';
import { List, Avatar, Space,Card , Button} from 'antd';
const { Meta } = Card;
const EventsList = (props) => {

  return (
    <Card title="Eventos del grupo"
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
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    //src={item.photo}
                  />
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={item.name}
                  description={item.status}
                />
                {item.description}
              </Card>
            </List.Item>
          )}
        />
      </Card>
  );
};


export default EventsList;
