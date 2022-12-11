// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi87ahcKBVuQZjBKINiSuZddb3RmqmG0k",
  authDomain: "dev-rahat.firebaseapp.com",
  projectId: "dev-rahat",
  storageBucket: "dev-rahat.appspot.com",
  messagingSenderId: "394312517203",
  appId: "1:394312517203:web:fa90de6792bf0416bea8a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;