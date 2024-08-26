// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpJ9QuM7V3xr9nj3nRGE9M076Ga7IEtVQ",
  authDomain: "bike-boulevard.firebaseapp.com",
  projectId: "bike-boulevard",
  storageBucket: "bike-boulevard.appspot.com",
  messagingSenderId: "581411403507",
  appId: "1:581411403507:web:ef1f0426e96da6b6b4e986"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;