import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox, Typography, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Spinner from "../../components/spinner";
import { Link } from "react-router-dom";
import "./index.css";
import EventumIcon from "../../assets/icons/eventumIcon.png";

const { Title } = Typography;

const SignInForm = (props) => {
  const { onFinish, getFieldDecorator, error, pending } = props;

  return (
    <Form onFinish={onFinish} className="login-form">
      <div className="center-text">
        <img src={EventumIcon} style={{ height: 100 }} />
        <Title level={2}>Inicia Sesión</Title>
      </div>
      <Form.Item
        name="email"
        rules={[
          { required: true, message: "Por favor ingresa tu correo!" },
          {
            type: "email",
            message: "Correo Electrónico no valido",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          { required: true, message: "Por favor ingresa tu contraseña!" },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        {error && (
          <Alert
            style={{ marginBottom: 20, marginTop: 20 }}
            message={error}
            type="error"
            showIcon
          />
        )}
        <div className="login-form-button-container">
          {pending && <Spinner />}
          {!pending && (
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Iniciar
            </Button>
          )}
        </div>
      </Form.Item>
      <div className="center-text">
        No tienes cuenta? <Link to="/signup">registrate ahora!</Link>
      </div>
    </Form>
  );
};

export default SignInForm;
