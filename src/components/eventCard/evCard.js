import React from 'react'
import { Card,  Switch  } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

const EventCard = (props) => {
  const { name, description, start, finish,asist } = props;
  return (
    <Card title={name}
      style={{ width: '100%' }}
      extra={<Switch checkedChildren="Asistir" unCheckedChildren="No asistir" defaultChecked={asist} />}
      >
      <p>{description}</p>
      <p>Empieza: {start}</p>
      <p>Termina: {finish}</p>
    </Card>
  );
};

export default EventCard
