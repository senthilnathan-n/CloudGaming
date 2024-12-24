import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore'; // Import other services as needed
import { getAuth } from "firebase/auth";

// Replace with your Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyBCxS7uYXfwmgv53g4ifR-OrudJdqWBikc",
  authDomain: "cloud-gaming-6c5b1.firebaseapp.com",
  projectId: "cloud-gaming-6c5b1",
  storageBucket: "cloud-gaming-6c5b1.appspot.com",
  messagingSenderId: "145665395398",
  appId: "1:145665395398:web:d736879ca58273f85825c7",
  measurementId: "G-S1NDMYZK6Z"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)
export default firebaseConfig;


