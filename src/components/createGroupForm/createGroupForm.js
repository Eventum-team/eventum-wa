import React from "react";
import "antd/dist/antd.css";
import { Form, Select, Input, Button, DatePicker } from "antd";

const { Option } = Select;

const CreateGroup = (props) => {
  const { handleSubmit } = props;

  const config = {
    rules: [{ type: "object", required: true, message: "Please select time!" }],
  };

  // const handleSelectChange = (value) => {
  //   props.form.setFieldsValue({
  //     note: `Hi, ${value === "male" ? "man" : "lady"}!`,
  //   });
  // };

  const checkPrice = (rule, value, callback) => {
    if (value > 0) {
      return callback();
    }
    callback("Price must greater than zero!");
  };

  return (
    <Form
      labelCol={{ span: 5 }}
      // wrapperCol={{ span: 112 }}
      onSubmit={handleSubmit}
      layout="vertical"
    >
      <Form.Item
        label="Fecha Viaje"
        // type="flex"
        // labelAlign="left"
        // justify="center"
        // labelCol={{ span: 2, offset: 0 }}
        wrapperCol={{ span: 24, offset: 0 }}
      >
        {/* {getFieldDecorator("date", config) */}
        {/* (<DatePicker placeholder="" />)} */}
        <DatePicker placeholder="" />
      </Form.Item>
      <Form.Item
        label="Tipo Viaje"
        // type="flex"
        // labelAlign="left"
        // justify="center"
        // labelCol={{ span: 2, offset: 0 }}
        wrapperCol={{ span: 24, offset: 0 }}
        rules={[{ required: true, message: "Por favor seleccione un tipo" }]}
      >
        <Select
          placeholder="Seleccione el tipo de viaje"
          // onChange={handleSelectChange}
        >
          <Select.Option value="sell">Venta</Select.Option>
          <Select.Option value="buy">compra</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Nombre"
        // type="flex"
        labelAlign="right"
        // justify="center"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 24, offset: 0 }}
        rules={[{ required: true, message: "Please input your note!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Lugar"
        // type="flex"
        // labelAlign="left"
        // justify="center"
        // labelCol={{ span: 2, offset: 0 }}
        wrapperCol={{ span: 24, offset: 0 }}
        rules={[{ required: true, message: "Please input your note!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Valor "
        // type="flex"
        // labelAlign="left"
        // justify="center"
        // labelCol={{ span: 2, offset: 0 }}
        wrapperCol={{ span: 24, offset: 0 }}
        rules={[
          {
            required: true,
            message: "Please input your note!",
            validator: checkPrice,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Cantidad"
        // type="flex"
        // labelAlign="left"
        // justify="center"
        // labelCol={{ span: 2, offset: 0 }}
        wrapperCol={{ span: 24, offset: 0 }}
        rules={[{ required: true, message: "Please input your note!" }]}
      >
        <Input />
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
