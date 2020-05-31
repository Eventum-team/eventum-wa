import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ApolloProvider from './ApolloProvider';
import { messaging } from "./init-fcm.js";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./firebase-messaging-sw.js")
    .then(function(registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function(err) {
      console.log("Service worker registration failed, error:", err);
    });
}

async function componentDidMount() {
  messaging.requestPermission()
    .then(async function() {
      const token = await messaging.getToken();
    })
    .catch(function(err) {
      console.log("Unable to get permission to notify.", err);
    });
    navigator.serviceWorker.addEventListener("message", (message) => console.log(message));
}

navigator.serviceWorker.addEventListener("message", (message) => console.log(message));

ReactDOM.render(
  <React.StrictMode>
    {ApolloProvider}
  </React.StrictMode>,
  document.getElementById("root")
);
