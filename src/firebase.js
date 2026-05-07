import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3fMh7jmsuazqWp9naUxlp-uyZK1HFUDk",
  authDomain: "startupglory.firebaseapp.com",
  projectId: "startupglory",
  storageBucket: "startupglory.firebasestorage.app",
  messagingSenderId: "755518409025",
  appId: "1:755518409025:web:f5f55233e331172d01b9c0",
  measurementId: "G-MH91QXFJL0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
