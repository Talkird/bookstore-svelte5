import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "bookstore-df22c.firebaseapp.com",
  projectId: "bookstore-df22c",
  storageBucket: "bookstore-df22c.appspot.com",
  messagingSenderId: "458054394476",
  appId: "1:458054394476:web:95585d4baae44c9e3b2e49",
  measurementId: "G-Q9REQ5HGP2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };