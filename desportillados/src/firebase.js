import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBqtwqNkaLrf2lQ2-5ddLjC8hmfw1MIPLU",
  authDomain: "desportillados-f8a04.firebaseapp.com",
  projectId: "desportillados-f8a04",
  storageBucket: "desportillados-f8a04.appspot.com",
  messagingSenderId: "799624098599",
  appId: "1:799624098599:web:bb6a3dd2fcbe6ac726ef02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db