import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3fMh7jmsuazqWp9naUxlp-uyZK1HFUDk",
  authDomain: "startupglory.firebaseapp.com",
  projectId: "startupglory",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
