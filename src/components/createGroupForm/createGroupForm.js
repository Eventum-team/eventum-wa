import React from "react";
import "antd/dist/antd.css";
import { Form, Select, Input, Button, DatePicker } from "antd";
import CreateGroupForm from "../dropDownGroup/dropDownGroup";

const { Option } = Select;

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Option value="01">+01</Option>
      <Option value="54">+54</Option>
    </Select>
  </Form.Item>
);

const CreateGroup = (props) => {
  const { handleSubmit, groupTypes } = props;

  return (
      <Form
        labelCol={{ span: 5 }}
        // wrapperCol={{ span: 112 }}
        onFinish={handleSubmit}
        layout="vertical"
        id="createGroup"
      >
        <Form.Item
          label="Tipo Viaje"
          wrapperCol={{ span: 24, offset: 0 }}
          name="groupType"
          rules={[{ required: true, message: "Por favor seleccione un tipo" }]}
        >
          <Select
            placeholder="Seleccione el tipo de viaje"
            // onChange={handleSelectChange}
          >
            {groupTypes.groupTypes.map((value) => (
              <Option key={value.id_type} value={value.id_type}>{value.name}</Option>
            ))}
          </Select>
        </Form.Item>
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
          name="phone"
          label="Numero de celular"
          labelAlign="left"
          labelCol={{ span: 6 }}
          labelAlign="right"
          wrapperCol={{ span: 24, offset: 0 }}
        >
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
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

export default CreateGroup;
