import React, { useEffect , useState} from "react";
import { Redirect } from 'react-router-dom'
import { Card,  Button  } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import {useMutation} from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import gql from 'graphql-tag';
const CREATE_ASSIST_MUTATION = gql`
mutation AssistMutation(
  $user_id: Int!
  $event_id: Int!
){
  addUserEvent(input:{
      user_id: $user_id
      event_id: $event_id
      assistance: true
      interested: false
    }) {
    message
  }
}
`;
const DELETE_ASSIST_MUTATION = gql`
mutation delAssistMutation(
  $userId: Int!
  $eventId: Int!
){
  deleteUserEvent(
      userId: $userId
      eventId: $eventId
    ) {
    message
  }
}
`;



/*async function ChangeAssist(asist, actUser, eventID) {
  const [assistMutation, { loading}] = useMutation(CREATE_ASSIST_MUTATION, { errorPolicy: 'all' });
  const [assistDeleteMutation, { loading1}] = useMutation(DELETE_ASSIST_MUTATION, { errorPolicy: 'all' });
  if (!asist){
    const {data} = await assistMutation({
      variables: {
        user_id: actUser,
        event_id: eventID,
        assistance: true,
        interested: false,
      }
    });
  }
  else{
    const {data} = await assistMutation({
      variables: {
        userId actUser,
        eventId: eventID,
      }
    });
  }
  return null
}*/

const EventCard = (props) => {
  const history = useHistory();
  const [successful, setSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const { name, description, start, finish,asist, actUser, eventID } = props;
  const [onAsistHandler, { loading, error }] = useMutation(CREATE_ASSIST_MUTATION, { errorPolicy: 'all' })
  const [onAsistHandler2, { data2, loading2, error2 }] = useMutation(DELETE_ASSIST_MUTATION, { errorPolicy: 'all' })
  const val={
    actUser: actUser,
    eventID: parseInt(eventID),
  }

  const asistButton = async values => {
    try {
      const {data} = await onAsistHandler({
        variables: {
          user_id: values.actUser,
          event_id: values.eventID,
        }
      });
    } catch(e){
      console.log({e});
      console.log(e.graphQLErrors); // Aqui estan los errores que mandamos, es una arreglo
      const errorPromt = e.graphQLErrors[0].message.detail; // mensaje
      // console.log(e.graphQLErrors[0].status); // status
      setErrorMessage(errorPromt);
    }
  }
  const deleteButton = async values => {

    try {
      const {data2} = await onAsistHandler2({
        variables: {
          userId: values.actUser,
          eventId: values.eventID,
        }
      });
    } catch(e){
      console.log({e});
      console.log(e.graphQLErrors); // Aqui estan los errores que mandamos, es una arreglo
      const errorPromt = e.graphQLErrors[0].message.detail; // mensaje
      // console.log(e.graphQLErrors[0].status); // status
      setErrorMessage(errorPromt);
    }
  }
  useEffect(() => {
    if (!loading) {
      console.log("AFTER IRE");
      
      props.refetchProfile();
    }
  },);

  // <button onClick={(e) => {this.validateNote(); this.props.history.push(`/board/${this.props.match.params.user}`);}}>
  //href={'/eventProfile/'+eventID}
  return (
    <Card title={name}
      style={{ width: '100%' }}
      extra={
        <div>
        <Button type="primary" disabled={asist} loading={loading} onClick={()=> asistButton(val)} >
          Iré
        </Button>
        <Button disabled={!asist} loading={loading2} onClick={(e)=> {deleteButton(val)}}>
          No iré
        </Button>
        </div>
      }
      >
      <p>{description}</p>
      <p>Empieza: {start}</p>
      <p>Termina: {finish}</p>
    </Card>
  );
};

export default EventCard