import firebase from 'firebase/compat/app';

//import firebase from "firebase/app" the compat term is due to an update in firebase version

import 'firebase/compat/auth'; //import the authentication research from firebase
import 'firebase/compat/database'; // import the database research from firebase

const firebaseConfig = { //configuration off API Keys
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig); //function necessary to initialize firebase

const auth = firebase.auth(); //constant create in order to facilitate the call of authentication research
const database = firebase.database(); //constant create in order to facilitate the call of database research

export { firebase, auth, database }