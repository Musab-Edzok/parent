importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyA93Y9Nf5J_owcGKIWFNGzzwoG0nLifRhc",
  authDomain: "flippr-45be9.firebaseapp.com",
  databaseURL: "https://flippr-45be9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "flippr-45be9",
  storageBucket: "flippr-45be9.appspot.com",
  messagingSenderId: "223594002541",
  appId: "1:223594002541:web:3d6174fd96f30aa1a0e764",
  measurementId: "G-DRHWS30JX6"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});