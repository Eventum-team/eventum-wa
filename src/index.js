import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ApolloProvider from './ApolloProvider';
import { messaging } from "./init-fcm.js";

Notification.requestPermission().then((permission) => {
  if (permission === 'granted') {
    console.log('Notification permission granted.');
    // TODO(developer): Retrieve an Instance ID token for use with FCM.
    // ...
  } else {
    console.log('Unable to get permission to notify.');
  }
});

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

messaging.getToken().then((currentToken) => {
  if (currentToken) {
    //sendTokenToServer(currentToken);
    //updateUIForPushEnabled(currentToken);
    console.log("token:", currentToken);
  } else {
    // Show permission request.
    console.log('No Instance ID token available. Request permission to generate one.');
    // Show permission UI.
    //updateUIForPushPermissionRequired();
    //setTokenSentToServer(false);
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  //showToken('Error retrieving Instance ID token. ', err);
  //setTokenSentToServer(false);
});

messaging.onTokenRefresh(() => {
  messaging.getToken().then((refreshedToken) => {
    console.log('Token refreshed as:', refreshedToken);
    // Indicate that the new Instance ID token has not yet been sent to the
    // app server.
    //setTokenSentToServer(false);
    // Send Instance ID token to app server.
    //sendTokenToServer(refreshedToken);
    // ...
  }).catch((err) => {
    console.log('Unable to retrieve refreshed token ', err);
    //showToken('Unable to retrieve refreshed token ', err);
  });
});

messaging.onMessage((payload) => {
  console.log('Message received. ', payload);

});

ReactDOM.render(
  <React.StrictMode>
    {ApolloProvider}
  </React.StrictMode>,
  document.getElementById("root")
);
