import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

// TODO: Replace these with your actual Firebase project config
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project
// 3. Click the Web icon (</>) to add an app
// 4. Copy the config values here
const firebaseConfig = {
  apiKey: "AIzaSyAdeMSHsKDe1YwpgDAX-SWHLnNrd0uqGcw",
  authDomain: "mangostackai.firebaseapp.com",
  projectId: "mangostackai",
  storageBucket: "mangostackai.firebasestorage.app",
  messagingSenderId: "1032966586299",
  appId: "1:1032966586299:web:23eb93cf6c5284e74a0e9e",
  measurementId: "G-CFC9CFMZ72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, push };
