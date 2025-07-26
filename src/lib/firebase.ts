// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyDH-SwyN48j4YCHegs6Z-nt5R9C4zajW8Q",
  authDomain: "hack-with-be.firebaseapp.com",
  projectId: "hack-with-be",
  storageBucket: "hack-with-be.firebasestorage.app",
  messagingSenderId: "81468433766",
  appId: "1:81468433766:web:314c1f5f865d807de954a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const database = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const blogsRef = ref(database, "blogs");
export const usersRef = ref(database, "users");
export const meetingsRef = ref(database, "meetings");

export default app;
