// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXC7cKdlYoRuev-NjHbvmUWcA_6hM6cnk",
  authDomain: "fws-19.firebaseapp.com",
  databaseURL: "https://fws-19-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "fws-19",
  storageBucket: "fws-19.appspot.com",
  messagingSenderId: "185619228079",
  appId: "1:185619228079:web:ec8d5d50cdefbfead9fb5a"
};

// Initialize Firebase
export default initializeApp(firebaseConfig);
