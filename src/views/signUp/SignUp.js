import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "antd";
import { useHistory } from "react-router-dom";
import SignUpForm from "../../components/signUpForm";
import gql from 'graphql-tag';
import {  useMutation } from "@apollo/react-hooks";

import "./index.css";


const SIGNUP_MUTATION = gql`
mutation UserAuthCreate(
  $username: String!, 
  $password: String!, 
  $name: String!, 
  $phone_number: String!, 
  $age: Int!, 
  $career: String!
  $photo: String!
){
  userAuthcreate(input:{
    username: $username
    password: $password
    name: $name
    phone_number: $phone_number
    age: $age
    career: $career
    photo: $photo
    status: "Ok"
  }){
    message
  }
}
`;


const SignUp = (props) => {
  const history = useHistory();
  // const dispatch = useDispatch();
  const [successful, setSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [photoPath, setPhotoPath] = useState("");
  const [signUpMutation, { loading}] = useMutation(SIGNUP_MUTATION, { errorPolicy: 'all' });

  function succesfulMessage() {
    Modal.success({
      title: "Usuario Registrado Exitosamente",
      okText: "Cerrar",
      content: (
        <div>
          <p>
            Bienvenido a Eventum , ha creado su cuenta satisfactoriamente.
          </p>
          <p>Ahora inice sesion </p>
        </div>
      ),
      onOk() {
        history.push("/signin");
      },
    });
  }

  const useImageUrl = (photoUrl) => {
    console.log(photoUrl);
    setPhotoPath(photoUrl);
  };

  const handleSubmit = async (values) => {
    console.log('Received values of form: ', values);

    
    try {
      const {data} = await signUpMutation({ 
        variables: { 
          username: values.email,
          password: values.password,
          name: values.username,
          phone_number: values.phone,
          age: parseInt(values.age),
          career: values.career,
          photo: photoPath,
        } 
      });

      setSuccessful(true);
    } catch(e){
      console.log({e});
      console.log(e.graphQLErrors); 
      const errorPromt = e.graphQLErrors[0].message.errors[0];
      setErrorMessage(errorPromt);
    }
    
  };

  useEffect(() => {
    if (!loading && successful) {
      succesfulMessage();
    }
  }, [successful]);

  return (
    <div className="centerSignUp">
      <SignUpForm handleSubmit={handleSubmit} pending={loading} error={errorMessage} useImageUrl={useImageUrl} />
    </div>
  );
};

export default SignUp;
