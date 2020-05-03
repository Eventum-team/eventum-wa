import React from 'react'
import { Card,  Switch  } from 'antd';
import { StarOutlined, CloseOutlined, CheckOutlined } from '@ant-design/icons';

const EventCard = (props) => {
  const { type, name, description, created_date, contact_number, followers} = props;
  return (
    <Card title={name}
      style={{ width: '100%' }}
      actions={[
        <StarOutlined key={followers} />,
      ]}
      >
      <p>{type}</p>
      <p>{description}</p>
      <p>Creado en: {created_date}</p>
      <p>Para más información llamar a: {contact_number}</p>
    </Card>
  );
};

export default EventCard