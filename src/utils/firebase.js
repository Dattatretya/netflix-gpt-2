// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1GKDAZzxjjrpWLAfpJChoxmBcvwiFnlk",
  authDomain: "netflixgpt-4f534.firebaseapp.com",
  projectId: "netflixgpt-4f534",
  storageBucket: "netflixgpt-4f534.appspot.com",
  messagingSenderId: "955198960169",
  appId: "1:955198960169:web:20dd2509e00c04bccd2238",
  measurementId: "G-786WMPTX5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth() 