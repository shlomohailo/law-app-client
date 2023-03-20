
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCOM_eoIG5KR4JHTW4bkp3sbV7iygrfSKA",
  authDomain: "low-app-897d6.firebaseapp.com",
  projectId: "low-app-897d6",
  storageBucket: "low-app-897d6.appspot.com",
  messagingSenderId: "302391820935",
  appId: "1:302391820935:web:72f184fd31978afa24ae22",
  measurementId: "G-TR5N2F6K3N"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;