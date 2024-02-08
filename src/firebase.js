import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDonlBawaruOyQdAwEvSZQzB8p56Oshw8",
  authDomain: "ecotexts-35879.firebaseapp.com",
  projectId: "ecotexts-35879",
  storageBucket: "ecotexts-35879.appspot.com",
  messagingSenderId: "1008385910193",
  appId: "1:1008385910193:web:b0d7554d3cc6cf66270990"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
await setPersistence(auth, browserLocalPersistence)
export const firestore = getFirestore(app);
