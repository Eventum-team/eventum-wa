import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Successful = props => {
  const { redirect, processCompleted } = props;

  useEffect(() => {
    return () => processCompleted();
  },[]);

  return (
    <Result
      status="success"
      title="Registro Exitoso"
      extra={[
        <Link to="/home">
          <Button type="primary" key="home">
            Volver a Inicio
          </Button>
        </Link>,
        <Link to={`/${redirect}`}>
          <Button key="again" onClick={()=> processCompleted()}>Nuevo Registro</Button>
        </Link>
      ]}
    />
  );
};

export default Successful;
