import React from 'react'
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined ,DislikeOutlined } from '@ant-design/icons';
import "./index.css";


const EventComments = (props) => {
  const commentList = props.data;
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  return (
    <div className="commentsBox">
      <List
      header={<div className="header">Comentarios</div>}
      itemLayout="horizontal"
      size="small"
      width= "100%"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={commentList}

      renderItem={item => (
        <List.Item
          key={item.name}
          actions={[
            <IconText icon={LikeOutlined} text={item.likes} key="list-vertical-like-o" />,
            <IconText icon={DislikeOutlined} text={item.dislikes} key="list-vertical-dislike-o" />,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.name}</a>}
          />
          {item.text}
        </List.Item>
      )}/>
    </div>
  );
};

export default EventComments
