// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKudZcYTApodnZr0Qv4NpUvZOfTiQN-gk",
  authDomain: "vasaskills.firebaseapp.com",
  projectId: "vasaskills",
  storageBucket: "vasaskills.appspot.com",
  messagingSenderId: "319323012076",
  appId: "1:319323012076:web:98fb04f09e04a8e2ed5ec9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)