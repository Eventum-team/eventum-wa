import React, { useState } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Form, Input, Row, Col, Select, Button, Typography, Alert } from "antd";
import Spinner from "../../components/spinner";
import PhotoLoader from "../photoLoader";
import EventumIcon from "../../assets/icons/eventumIcon.png";

const { Option } = Select;
const { Title } = Typography;

const SignUpForm = (props) => {
  const { handleSubmit, showModal, error, pending, useImageUrl } = props;
  const [confirmDirty, setConfirmDirty] = useState(false);

  const handleConfirmBlur = (e) => {
    const { value } = e.target;
    setConfirmDirty(confirmDirty || !!value);
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 24 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
    },
  };

  const prefixSelector = (
    <Form.Item style={{ margin: "0" }} name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="01">+01</Option>
        <Option value="54">+54</Option>
      </Select>
    </Form.Item>
  );

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  return (
    <div>
      <Form {...formItemLayout} onFinish={handleSubmit} className="login-form">
        <div className="center-text">
          <img src={EventumIcon} style={{ height: 100 }} />
          <Title level={2}>Registrate</Title>
        </div>
        <Row type="" justify="" style={{ padding: "0 100px", margin: 0 }}>
          <Col>
            <Form.Item
              style={{ margin: "0" }}
              labelAlign="left"
              label="Nombre"
              style={{ margin: "0" }}
              name="username"
              rules={[
                {
                  required: true,
                  message: "Escribe un nombre valido",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              style={{ margin: "0" }}
              labelAlign="left"
              label="E-mail"
              name="email"
              rules={[
                {
                  type: "email",
                  message: "Correo Electrónico no valido",
                },
                {
                  required: true,
                  message: "Ingresa tu correo Electrónico",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              style={{ margin: "0" }}
              labelAlign="left"
              label="Contraseña"
              name="password"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa una contraseña!",
                },
                {
                  min: 2,
                  message: "La contraseña debe tener por lo menos 2 caracteres",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              style={{ margin: "0" }}
              labelAlign="left"
              label="Confirmar Contraseña"
              name="confirmPassword"
              extra="Verifica tu Contraseña"
              ependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Por favor verifica tu contraseña!",
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "Las contraseñas que ingresaste no son validas"
                    );
                  },
                }),
              ]}
            >
              <Input.Password onBlur={handleConfirmBlur} />
            </Form.Item>

            <Form.Item
              style={{ margin: "0" }}
              name="phone"
              label="Numero Celular"
              labelAlign="left"
              rules={[{message: "Numero celular debe tener 10 caracteres" , len:10}]}
            >
              <Input style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              style={{ margin: "0" }}
              label="Carrera"
              name="career"
              labelAlign="left"
              rules={[
                {
                  required: true,
                  message: "Por favor pon tu carrera",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              style={{ margin: "0" }}
              label="Edad"
              labelAlign="left"
              name="age"
              rules={[
                {
                  required: true,
                  message: "Por favor pon tu edad",
                },
              ]}
            >
              <Input type="Number" />
            </Form.Item>
          </Col>
        </Row>
        <Row type="" justify="center">
          <Col style={{ margin: 20 }}>
            {error && (
              <Alert
                style={{ marginBottom: 20 }}
                message={error}
                type="error"
                showIcon
              />
            )}
            {pending && <Spinner />}
            <div style={{ justifyContent: "center", display: "flex" }}>
              <PhotoLoader onFinish={useImageUrl} />
            </div>
            <Form.Item
              style={{ margin: "0" }}
              className="center-text"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {!pending && (
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
              )}
            </Form.Item>

            <div className="center-text">
              Ya tienes una cuenta? <Link to="/signin">Inicia Sesión!</Link>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SignUpForm;
