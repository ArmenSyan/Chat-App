// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Database, getDatabase } from "firebase/database";
import { getAuth, signInWithPopup, GoogleAuthProvider, Auth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlyhIlCfwmw9Z507212LkopMklChcYWgY",
  authDomain: "chat-app-59512.firebaseapp.com",
  databaseURL: "https://chat-app-59512-default-rtdb.firebaseio.com",
  projectId: "chat-app-59512",
  storageBucket: "chat-app-59512.firebasestorage.app",
  messagingSenderId: "334812514975",
  appId: "1:334812514975:web:baeef7e7a3e779267eb0aa",
  measurementId: "G-JFYYZ9MZEG"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db: Database = getDatabase(app);
export const auth: Auth = getAuth(app);
export const provider: GoogleAuthProvider = new GoogleAuthProvider();
export { signInWithPopup };