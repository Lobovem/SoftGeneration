// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const API_KEY = import.meta.env.VITE_API_KEY

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "softgeneration-a0e40.firebaseapp.com",
  projectId: "softgeneration-a0e40",
  storageBucket: "softgeneration-a0e40.appspot.com",
  messagingSenderId: "856851778746",
  appId: "1:856851778746:web:4a4a2ce1ee2a27779f8683"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider()

