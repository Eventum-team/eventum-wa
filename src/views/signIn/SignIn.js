import React, { useEffect , useState} from "react";
import { useHistory } from "react-router-dom";
import SignInForm from "../../components/signInForm";
import "./index.css";
import gql from 'graphql-tag';
import {  useMutation } from "@apollo/react-hooks";

const SIGNIN_MUTATION = gql`
mutation LogUser($username: String!, $password: String!){
  logUser(input:{
    username: $username,
    password: $password
  }){
    refresh
    access
  }
}
`;

const SignIn = (props) => {
  const history = useHistory();
  const [successful, setSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [signInMutation, { loading}] = useMutation(SIGNIN_MUTATION, { errorPolicy: 'all' });

  const onFinish = async values => {
    console.log('Received values of form: ', values);
    try {
      const {data} = await signInMutation({ 
        variables: { 
          username: values.email,
          password: values.password,
        } 
      });

      setSuccessful(true);
    } catch(e){
      console.log(e.graphQLErrors); // Aqui estan los errores que mandamos, es una arreglo
      const errorPromt = e.graphQLErrors[0].message.detail; // mensaje
      // console.log(e.graphQLErrors[0].status); // status
      setErrorMessage(errorPromt);
    }
  };

  useEffect(() => {
    if (!loading && successful) {
      history.push("/home");
    }
  }, [successful]);

  return (
    <div className="center">
      <SignInForm onFinish={onFinish} pending={loading} error={errorMessage} />
    </div>
  );
};
export default SignIn;
