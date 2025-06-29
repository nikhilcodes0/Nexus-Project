import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";
import { getDatabase } from "firebase/database"
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx_kZN6uXgq_fvXwKwlqE4MEegvBvQLsw",
  authDomain: "ecotexts-2c419.firebaseapp.com",
  projectId: "ecotexts-2c419",
  storageBucket: "ecotexts-2c419.firebasestorage.app",
  messagingSenderId: "563843615861",
  appId: "1:563843615861:web:195c8ec2f9ca3cf36b3c3c",
  measurementId: "G-T8T18PYN6S"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
await setPersistence(auth, browserLocalPersistence)
export const firestore = getFirestore(app);
export const database = getDatabase(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const storage = getStorage();