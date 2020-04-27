import React, { useState } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";
import {
  Form,
  Input,
  Row,
  Col,
  Checkbox,
  Button,
  Typography,
  Alert,
} from "antd";
import Spinner from "../../components/spinner";

const { Title } = Typography;

const SignUpForm = (props) => {
  const { handleSubmit, showModal, error, pending } = props;
  const [confirmDirty, setConfirmDirty] = useState(false);

  const handleConfirmBlur = (e) => {
    const { value } = e.target;
    setConfirmDirty(confirmDirty || !!value);
  };

  const compareToFirstPassword = (rule, value, callback) => {
    const { form } = props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Las contraseñas que ingresaste no son iguales!");
    } else {
      callback();
    }
  };

  const validateToNextPassword = (rule, value, callback) => {
    const { form } = props;
    if (value && confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
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
      <Form {...formItemLayout} onSubmit={handleSubmit} className="login-form">
        <div className="center-text">
          <Title level={2}>Registrate</Title>
        </div>
        <Row type="" justify="" style={{ padding: "0 100px" }}>
          <Col>
            <Form.Item
              labelAlign="left"
              label="Nombre"
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
              labelAlign="left"
              label="E-mail"
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
              labelAlign="left"
              label="Contraseña"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa una contraseña!",
                },
                {
                  validator: validateToNextPassword,
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              labelAlign="left"
              label="Confirmar Contraseña"
              extra="Verifica tu Contraseña"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Por favor verifica tu contraseña!",
                },
                {
                  validator: compareToFirstPassword,
                },
              ]}
            >
              <Input.Password onBlur={handleConfirmBlur} />
            </Form.Item>
          </Col>
        </Row>
        <Row type="" justify="center">
          <Col>
            {error && (
              <Alert
                style={{ marginBottom: 20 }}
                message={error.message}
                type="error"
                showIcon
              />
            )}
            {pending && <Spinner />}
            <Form.Item
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
