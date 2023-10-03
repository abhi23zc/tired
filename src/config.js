
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCHz2kdfGULYObs7Ge9XkzA9qIv742wZx8",
  authDomain: "e-chat-a7248.firebaseapp.com",
  projectId: "e-chat-a7248",
  storageBucket: "e-chat-a7248.appspot.com",
  messagingSenderId: "331830483919",
  appId: "1:331830483919:web:81c006b685110d90a610ba"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const db = getFirestore(app)

export {database, app}