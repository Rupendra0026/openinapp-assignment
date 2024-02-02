import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCGJIV4FO2jUDrKResPu9bX2jC8kbeqf6k",
  authDomain: "openinapp-assignment-2686b.firebaseapp.com",
  projectId: "openinapp-assignment-2686b",
  storageBucket: "openinapp-assignment-2686b.appspot.com",
  messagingSenderId: "905399701054",
  appId: "1:905399701054:web:8cb359191bf2fb76f44b6f",
  measurementId: "G-J660H4CGDP"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider=new GoogleAuthProvider();
