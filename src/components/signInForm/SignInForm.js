import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox, Typography, Alert } from "antd";
import Icon from "@ant-design/icons";
import Spinner from "../../components/spinner";
import { Link } from "react-router-dom";
import "./index.css";

const { Title } = Typography;

const SignInForm = (props) => {
  const { handleSubmit, getFieldDecorator, error, pending } = props;

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <div className="center-text">
        <Title level={2}>Inicia Sesión</Title>
      </div>
      <Form.Item
        rules={[
          { required: true, message: "Por favor ingresa tu correo!" },
          {
            type: "email",
            message: "Correo Electrónico no valido",
          },
        ]}
      >
        <Input
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Correo"
        />
      </Form.Item>
      <Form.Item
        rules={[
          { required: true, message: "Por favor ingresa tu contraseña!" },
        ]}
      >
        <Input
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          placeholder="Contraseña"
        />
      </Form.Item>
      <Form.Item>
        {error && (
          <Alert
            style={{ marginBottom: 20, marginTop: 20 }}
            message={error.message}
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
