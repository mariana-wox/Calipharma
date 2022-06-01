
// Import the functions you need from the SDKs you need
//import firebase from 'firebase/compat/app'; //v9
//import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyAM_C1jLZZx5st76z6xWrnera2x_gqgTxk",
    authDomain: "restaurante-88a23.firebaseapp.com",
    projectId: "restaurante-88a23",
    storageBucket: "restaurante-88a23.appspot.com",
    messagingSenderId: "187552751386",
    appId: "1:187552751386:web:70080402ee5d05ecedd6a3",
    measurementId: "G-6SY6FBB9RM"
};

// Initialize Firebase
let app;
if (firebase.apps.length===0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const auth = firebase.auth()
export {auth};
//Altas
const db = firebase.firestore()
export default {
  firebase,
  db,
}