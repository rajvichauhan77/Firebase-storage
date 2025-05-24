// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0FhIfyVeCcZXxMTcbJgDwZBkoXgPyIus",
  authDomain: "firestore-385ef.firebaseapp.com",
  projectId: "firestore-385ef",
  storageBucket: "firestore-385ef.firebasestorage.app",
  messagingSenderId: "171899328336",
  appId: "1:171899328336:web:97d80929671053718d7e55",
  measurementId: "G-73BEHBLL6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
export default db;


