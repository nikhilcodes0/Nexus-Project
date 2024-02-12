import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";
import { getDatabase } from "firebase/database"
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDonlBawaruOyQdAwEvSZQzB8p56Oshw8",
  authDomain: "ecotexts-35879.firebaseapp.com",
  projectId: "ecotexts-35879",
  storageBucket: "ecotexts-35879.appspot.com",
  messagingSenderId: "1008385910193",
  appId: "1:1008385910193:web:b0d7554d3cc6cf66270990",
  databaseURL: "https://ecotexts-35879-default-rtdb.firebaseio.com/"
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