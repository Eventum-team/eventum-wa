import React from "react";
import "antd/dist/antd.css";
import { Form, Select, Input, Button, DatePicker } from "antd";
import PhotoLoader from "../photoLoader";


const { Option } = Select;

const CreateGroup = (props) => {
  const { handleSubmit, groupTypes , useImageUrl} = props;

  return (
      <Form
        labelCol={{ span: 5 }}
        // wrapperCol={{ span: 112 }}
        onFinish={handleSubmit}
        layout="vertical"
        id="createGroup"
      >
        <Form.Item
          label="Tipo Grupo"
          wrapperCol={{ span: 24, offset: 0 }}
          name="groupType"
          rules={[{ required: true, message: "Por favor seleccione un tipo" }]}
        >
          <Select
            placeholder="Seleccione el tipo de grupo"
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
          rules={[{ required: true, message: "Ingresa un nombre, maximo 30 caracteres", max: 30 }]}
          name="groupName"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Descripcion"
          wrapperCol={{ span: 24, offset: 0 }}
          name="description"
          rules={[{ required: true, message: "Ingresa una descripcion, maximo 100 caracteres" , max:100}]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Numero de celular"
          labelAlign="left"
          labelCol={{ span: 6 }}
          labelAlign="right"
          rules={[{message: "Numero celular debe tener 10 caracteres", len:10}]}
          wrapperCol={{ span: 24, offset: 0 }}
        >
          <Input style={{ width: '100%' }} />
        </Form.Item>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <PhotoLoader onFinish={useImageUrl} />
        </div>
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
