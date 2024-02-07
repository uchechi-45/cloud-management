
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "cloud-app-d628c.firebaseapp.com",
  projectId: "cloud-app-d628c",
  storageBucket: "cloud-app-d628c.appspot.com",
  messagingSenderId: "1050169258473",
  appId: "1:1050169258473:web:64d268b5ae4abbb2809b78"
};

const app = initializeApp(firebaseConfig);