// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACfnc0oQ0N7H8TDRidsIpbK-0uk06IQB0",
  authDomain: "netflix-gpt-fefb6.firebaseapp.com",
  projectId: "netflix-gpt-fefb6",
  storageBucket: "netflix-gpt-fefb6.firebasestorage.app",
  messagingSenderId: "665658096093",
  appId: "1:665658096093:web:73c95981e8fdcc070b5e34",
  measurementId: "G-XGDPKW07NL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();