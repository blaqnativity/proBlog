// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH0eSwj65ApswEytfqxnVlhAIiob32HT0",
  authDomain: "auth-app-3d0c0.firebaseapp.com",
  projectId: "auth-app-3d0c0",
  storageBucket: "auth-app-3d0c0.firebasestorage.app",
  messagingSenderId: "246642847994",
  appId: "1:246642847994:web:f6db1da3b3bc5023089943",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
