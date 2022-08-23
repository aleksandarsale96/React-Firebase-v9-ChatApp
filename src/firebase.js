// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeGVbR9lDPFVZz0V0Qun7ACSsoqYRXA6c",
  authDomain: "chat-app-e4f2d.firebaseapp.com",
  projectId: "chat-app-e4f2d",
  storageBucket: "chat-app-e4f2d.appspot.com",
  messagingSenderId: "657009667489",
  appId: "1:657009667489:web:d549f63a8443c0f35d6fe0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)