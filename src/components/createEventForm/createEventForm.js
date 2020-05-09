import React from "react";
import "antd/dist/antd.css";
import { Form, Select, Input, Button, DatePicker } from "antd";

const { Option } = Select;
const { RangePicker } = DatePicker;

const CreateEvent = (props) => {
  const { handleSubmit } = props;

  return (
      <Form
        labelCol={{ span: 5 }}
        // wrapperCol={{ span: 112 }}
        onFinish={handleSubmit}
        layout="vertical"
        id="createGroup"
      >
        <Form.Item
          label="Nombre"
          labelAlign="right"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 24, offset: 0 }}
          rules={[{ required: true, message: "Ingresa un nombre" }]}
          name="groupName"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Descripcion"
          wrapperCol={{ span: 24, offset: 0 }}
          name="description"
          rules={[{ required: true, message: "Ingresa una descripcion" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Fechas"
          wrapperCol={{ span: 24, offset: 0 }}
          name="date"
          rules={[{ required: true, message: "Ingresa una fecha" }]}
        >
          <RangePicker showTime />
        </Form.Item>
        <Form.Item
          type="flex"
          labelAlign="center"
          justify="center"
          labelCol={{ span: 4, offset: 0 }}
          // wrapperCol={{ span: 11, offset: 0 }}
        >
          <Button type="primary" htmlType="submit">
            Crear
          </Button>
        </Form.Item>
      </Form>
  );
};

export default CreateEvent;
