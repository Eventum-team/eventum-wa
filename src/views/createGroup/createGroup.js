import React, {useState} from "react";
import CreateGroupForm from "../../components/createGroupForm";
import MainLayout from "../../components/layout";
import { Typography, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import ContentLayout from "../../components/contentLayout";
import Spinner from "../../components/spinner";
import ErrorAlert from "../../components/error";
import Successful from "../../components/succesfulOperation";
import backgroundImage from "../../assets/imgs/undraw_schedule_pnbk.png";
import {  useMutation, useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';

const { Title } = Typography;


const GROUP_TYPES_QUERY = gql`
query {
  groupTypes{
    id_type
    name
  }
}
`;

/*** 
const EVENT_MUTATION = gql`
mutation {
  createEvent(
    input:{
      ownerId: 1
      ownerType: "user"
      name: "test event"
      eventStartDate: "2020-04-20T06:00:00Z"
      eventFinishDate: "2020-04-20T06:00:00Z"
      description: "desc"
      latitude: "1"
      longitude: "2"
      status: "Ok"
      eventType: "official"
      url: "some url"
    }
  ){
    message
    status
  }
}
`;*/


const CREATE_GROUP_MUTATION = gql`
mutation CreateNewGroup(
  $id_type: Int!,
  $name: String!,
  $description: String!,
  $contact_number: String!,
  $status: String!,
  $token: String!,
  $id_user: ID!,
){
  createNewGroup(
    id_user: $id_user
    input:{
      id_type: $id_type
      name: $name
      description: $description
      contact_number: $contact_number
      status: $status
    }
    token: {
      token: $token
    }
  ){
    name
  }
}
`;

const CreateGroup = (props) => {
  // const dispatch = useDispatch();
  const [successful, setSuccessful] = useState(false);
  const { loading, error, data } = useQuery(GROUP_TYPES_QUERY);
  const [createGroupMutation, { loadingCreate}] = useMutation(CREATE_GROUP_MUTATION, { errorPolicy: 'all' });

  const handleSubmit = (values) => {
    console.log(values);
    createGroupMutation({
      variables:{
        id_type: parseInt(values.groupType),
        name: values.groupName,
        description: values.description,
        contact_number: values.phone,
        status: "Ok",
        token: "token",
        id_user: parseInt("1")
      }
    });
    setSuccessful(true);
  };

  console.log(data);

  // {!loading && error && <ErrorAlert error={error} />}
  return (
    <ContentLayout>
      {loading && <Spinner />}
      
      {!loading && successful && (
        <Successful
          redirect={"createGroup"}
          processCompleted={()=>{}}
          //terminar proceso
        />
      )}
      {!loading  && !successful && (
        <div>
          <Title level={2} style={{ textAlign: "center" }}>
            Crea un Grupo
          </Title>
          <Row>
            <Col span={12} style={{ padding: "0 100px" }}>
              <CreateGroupForm handleSubmit={handleSubmit} groupTypes={data} />
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
    </ContentLayout>
  );
};

export default CreateGroup;
