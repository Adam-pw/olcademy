import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjx_q27U3U-ohLfJaZpXpdmc-vCSk30ho",
  authDomain: "olcademy-5d68a.firebaseapp.com",
  projectId: "olcademy-5d68a",
  storageBucket: "olcademy-5d68a.appspot.com",
  messagingSenderId: "722892392113",
  appId: "1:722892392113:web:e620ce0bfb55c27db50490",
  measurementId: "G-M8Q343JXE8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };