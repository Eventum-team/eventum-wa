import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SignInForm from "../../components/signInForm";
import "./index.css";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import {
  addUserId,
  addAccessToken,
  addRefreshToken,
} from "../../data/redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const SIGNIN_MUTATION = gql`
  mutation LogUser($username: String!, $password: String!) {
    logUser(input: { username: $username, password: $password }) {
      refresh
      access
    }
  }
`;
const USERID_MUTATION = gql`
  mutation VrfTok($token: String!) {
    vrfTok(input: { token: $token })
  }
`;

const SignIn = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [successful, setSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [signInMutation, { loading }] = useMutation(SIGNIN_MUTATION, {
    errorPolicy: "all",
  });
  const [userIdMutation, { loadingUserMutation }] = useMutation(
    USERID_MUTATION,
    { errorPolicy: "all" }
  );

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    try {
      const { data } = await signInMutation({
        variables: {
          username: values.email,
          password: values.password,
        },
      });

      localStorage.setItem("access", data.logUser.access);
      localStorage.setItem("refresh", data.logUser.refresh);

      const idUser = await userIdMutation({
        variables: {
          token: data.logUser.access,
        },
      });
      dispatch(addUserId(idUser.data.vrfTok));
      dispatch(addAccessToken(data.logUser.access));
      dispatch(addRefreshToken(data.logUser.refresh));
      setSuccessful(true);
    } catch (e) {
      console.log({ e });
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
    <div className="centerSignIn">
      <SignInForm onFinish={onFinish} pending={loading} error={errorMessage} />
    </div>
  );
};
export default SignIn;
