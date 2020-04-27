import React from "react";
import CreateGroupForm from "../../components/createGroupForm";
import { Typography, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/spinner";
import ErrorAlert from "../../components/error";
import Successful from "../../components/succesfulOperation";
import backgroundImage from "../../assets/imgs/undraw_schedule_pnbk.png";

const { Title } = Typography;

const CreateGroup = (props) => {
  // const dispatch = useDispatch();
  const error = null;
  const pending = false;
  const successful = false;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
      }
    });
  };

  return (
    <>
      {pending && <Spinner />}
      {!pending && error && <ErrorAlert error={error} />}
      {!pending && !error && successful && (
        <Successful
          redirect={"createGroup"}
          //terminar proceso
        />
      )}
      {!pending && !error && !successful && (
        <div>
          <Title level={2} style={{ textAlign: "center" }}>
            Crea un Grupo
          </Title>
          <Row>
            <Col span={12} style={{ padding: "0 100px" }}>
              <CreateGroupForm handleSubmit={handleSubmit} />
            </Col>
            <Col span={12}>
              <div>
                <img
                  src={backgroundImage}
                  alt="Background"
                  style={{ width: "100%" }}
                ></img>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default CreateGroup;
