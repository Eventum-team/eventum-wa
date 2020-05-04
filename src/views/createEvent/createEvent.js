import React, {useState} from "react";
import CreateEventForm from "../../components/createEventForm";
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
import store from "../../data/redux/store";

const { Title } = Typography;


const CREATE_EVENT_MUTATION = gql`
mutation CreateEvent(
  $ownerId: Int!
  $ownerType: String!
  $name: String!
  $eventStartDate: String!
  $eventFinishDate: String!
  $description: String!
  $latitude: String!
  $longitude: String!
  $status: String!
  $eventType: String!
  $url: String!
){
  createEvent(
    input:{
      ownerId: $ownerId
      ownerType: $ownerType
      name: $name
      eventStartDate: $eventStartDate
      eventFinishDate: $eventFinishDate
      description: $description
      latitude: $latitude
      longitude: $longitude
      status: $status
      eventType: $eventType
      url: $url
    }
  ){
    message
    status
  }
}
`;

const formatDate = (moment) => {
  return moment.format('YYYY-MM-DDThh:mm:ss') + 'Z';
};

    
const CreateGroup = (props) => {
  // const dispatch = useDispatch();
  const [successful, setSuccessful] = useState(false);
  const [createEventMutation, { loading}] = useMutation(CREATE_EVENT_MUTATION, { errorPolicy: 'all' });

  const handleSubmit = (values) => {
    console.log(values);
    const formatedDates = values.date.map(formatDate);

    const state = store.getState();

    console.log("----");
    console.log(state);
    console.log("----");

    createEventMutation({
      variables:{
        ownerId: parseInt(state.userId),
        ownerType: "user",
        name: values.groupName,
        eventStartDate: formatedDates[0],
        eventFinishDate: formatedDates[1],
        description: values.description,
        latitude: "4.6097100",
        longitude: "-74.0817500",
        status: "active",
        eventType: "official",
        url: "",
      }
    });

    setSuccessful(true);
  };

  // {!loading && error && <ErrorAlert error={error} />}
  return (
    <ContentLayout>
      {loading && <Spinner />}
      
      {!loading && successful && (
        <Successful
          redirect={"createEvent"}
          processCompleted={()=>{}}
          //terminar proceso
        />
      )}
      {!loading  && !successful && (
        <div>
          <Title level={2} style={{ textAlign: "center" }}>
            Crea un evento
          </Title>
          <Row>
            <Col span={12} style={{ padding: "0 100px" }}>
              <CreateEventForm handleSubmit={handleSubmit}  />
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
