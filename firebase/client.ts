// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps  } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGVKVl04WsfFc85w3KIGkFXfECqBWApdE",
  authDomain: "echohire-69f5c.firebaseapp.com",
  projectId: "echohire-69f5c",
  storageBucket: "echohire-69f5c.firebasestorage.app",
  messagingSenderId: "332173421994",
  appId: "1:332173421994:web:5c54a6701e6f5a63a60fd3",
  measurementId: "G-8501KQ93QF"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);