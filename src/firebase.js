import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjl1Ng2tduRhSwppfLQ-WM8VgkXFmqSC0",
  authDomain: "riherkush.firebaseapp.com",
  projectId: "riherkush",
  storageBucket: "riherkush.firebasestorage.app",
  messagingSenderId: "389358142813",
  appId: "1:389358142813:web:d752ece9226b9c3442d4b4",
  measurementId: "G-V0DFTBVN9S",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
