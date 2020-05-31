import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBzM3_mkvUv5P5RnVV082erwIjvd2KtYgk",
    authDomain: "eventum-1ffdd.firebaseapp.com",
    databaseURL: "https://eventum-1ffdd.firebaseio.com",
    projectId: "eventum-1ffdd",
    storageBucket: "eventum-1ffdd.appspot.com",
    messagingSenderId: "157313059737",
    appId: "1:157313059737:web:b00650f178ee631dd7a108",
    measurementId: "G-JCQPHX0Q2B"
  });
const messaging = initializedFirebaseApp.messaging();

export { messaging };