importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyBzM3_mkvUv5P5RnVV082erwIjvd2KtYgk",
    authDomain: "eventum-1ffdd.firebaseapp.com",
    databaseURL: "https://eventum-1ffdd.firebaseio.com",
    projectId: "eventum-1ffdd",
    storageBucket: "eventum-1ffdd.appspot.com",
    messagingSenderId: "157313059737",
    appId: "1:157313059737:web:b00650f178ee631dd7a108",
    measurementId: "G-JCQPHX0Q2B"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register('../firebase-messaging-sw.js')
     .then(function(registration) {
       console.log('Registration successful, scope is:', registration.scope);
     }).catch(function(err) {
       console.log('Service worker registration failed, error:', err);
     });
   }

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

     const promiseChain = clients
          .matchAll({
               type: "window",
               includeUncontrolled: true,
          })
          .then((windowClients) => {
               for (let i = 0; i < windowClients.length; i++) {
                    const windowClient = windowClients[i];
                    windowClient.postMessage(payload);
               }
          })
          .then(() => {
               return registration.showNotification("my notification title");
          });
     return promiseChain;
});
self.addEventListener("notificationclick", function(event) {
     console.log(event);
});