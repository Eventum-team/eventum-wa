import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "antd";
import { useHistory } from "react-router-dom";
import SignUpForm from "../../components/signUpForm";

import "./index.css";

const SignUp = (props) => {
  const history = useHistory();
  // const dispatch = useDispatch();
  const error = null;
  const pending = false;
  const successful = false;

  function succesfulMessage() {
    Modal.success({
      title: "Usuario Registrado Exitosamente",
      okText: "Cerrar",
      content: (
        <div>
          <p>
            Bienvenido a Los Eventum , ha creado su cuenta satisfactoriamente.
          </p>
          <p>Ahora inice sesion </p>
        </div>
      ),
      onOk() {
        history.push("/signin");
      },
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
      }
    });
  };

  useEffect(() => {
    if (!pending && !error && successful) {
      succesfulMessage();
    }
  }, [successful]);

  return (
    <div className="center">
      <SignUpForm handleSubmit={handleSubmit} pending={pending} error={error} />
    </div>
  );
};

export default SignUp;
