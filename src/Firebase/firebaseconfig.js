
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth,GoogleAuthProvider } from "firebase/auth";

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
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db =getFirestore(app);
export const provider =new GoogleAuthProvider();
export default app;
