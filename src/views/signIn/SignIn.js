import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import SignInForm from "../../components/signInForm";
import "./index.css";

const SignIn = (props) => {
  const history = useHistory();
  const error = null;
  const pending = false;
  const successful = false;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  useEffect(() => {
    if (!pending && !error && successful) {
      history.push("/home");
    }
  }, [successful]);

  return (
    <div className="center">
      <SignInForm handleSubmit={handleSubmit} pending={pending} error={error} />
    </div>
  );
};
export default SignIn;
