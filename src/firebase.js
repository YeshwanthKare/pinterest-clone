import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMlKOJN03nqcHz8BquZEReI9S6othttcc",
  authDomain: "pinterest-clone-e99f4.firebaseapp.com",
  projectId: "pinterest-clone-e99f4",
  storageBucket: "pinterest-clone-e99f4.appspot.com",
  messagingSenderId: "714935934463",
  appId: "1:714935934463:web:a54f7c2402bc9bbb695bca",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
