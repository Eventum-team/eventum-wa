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

const GET_REFRESH_TOKEN = gql`
mutation RefreshTok(
  $refresh: String!
){
  refreshTok(
    input:{
      refresh: $refresh
    })
  {
    	access
  }
}
`;


const CREATE_GROUP_MUTATION = gql`
mutation CreateNewGroup(
  $id_type: Int!,
  $name: String!,
  $description: String!,
  $contact_number: String!,
  $status: String!,
  $token: String!,
  $photo: String!
  $id_user: ID!
){
  createNewGroup(
    id_user: $id_user
    input:{
      id_type: $id_type
      name: $name
      description: $description
      contact_number: $contact_number
      status: $status
      photo: $photo
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
  const [photoPath, setPhotoPath] = useState("");
  const [successful, setSuccessful] = useState(false);
  const { loading, error, data } = useQuery(GROUP_TYPES_QUERY);
  const [createGroupMutation, { loadingCreate}] = useMutation(CREATE_GROUP_MUTATION, { errorPolicy: 'all' });
  
  const userId =  useSelector(state => state.userId);

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
        photo: photoPath,
        id_user: parseInt(userId)
      }
    });
    setSuccessful(true);
  };

  const useImageUrl = (photoUrl) => {
    setPhotoPath(photoUrl);
  };

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
              <CreateGroupForm handleSubmit={handleSubmit} groupTypes={data} useImageUrl={useImageUrl}/>
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
