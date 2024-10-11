// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSc1JzgOPOIyYdYcTH2LEb3i7zxv2dKYg",
  authDomain: "book-review-authentication.firebaseapp.com",
  projectId: "book-review-authentication",
  storageBucket: "book-review-authentication.appspot.com",
  messagingSenderId: "51714161702",
  appId: "1:51714161702:web:97d4a18cedd48b58323ae7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;