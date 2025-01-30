// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6lGuDZkvWIrh5-N32c6WTll9JaDM6XoU",
  authDomain: "mern-book-inventory-9f621.firebaseapp.com",
  projectId: "mern-book-inventory-9f621",
  storageBucket: "mern-book-inventory-9f621.firebasestorage.app",
  messagingSenderId: "1025747256383",
  appId: "1:1025747256383:web:c00c8dea31ffe54f2be48a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;