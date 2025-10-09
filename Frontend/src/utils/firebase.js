// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "bingebrain-8866f.firebaseapp.com",
  projectId: "bingebrain-8866f",
  storageBucket: "bingebrain-8866f.firebasestorage.app",
  messagingSenderId: "640513349939",
  appId: "1:640513349939:web:ed5d1a0e69af465f504646",
  measurementId: "G-WJYTB33MD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export default auth;