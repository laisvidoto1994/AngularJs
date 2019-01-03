const config = 
{
  apiKey: "AIzaSyA-tn9gaMhuV0ZPjPUCUttux34xDZEr6YI",
  authDomain: "angulajs-firebase.firebaseapp.com",
  databaseURL: "https://angulajs-firebase.firebaseio.com",
  projectId: "angulajs-firebase",
  storageBucket: "angulajs-firebase.appspot.com",
  messagingSenderId: "1019968766463"
  };
  
firebase.initializeApp(config);

//npm install -g firebase-tools
//firebase login
//firebase init
//firebase serve

angular.module('myApp', ['ngMaterial','ngMessages','ui.router', 'firebase']);