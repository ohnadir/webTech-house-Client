import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk8Ii633HVZ_Met_xu3TABuk1CyHdXxUk",
  authDomain: "webtech-house-b3de0.firebaseapp.com",
  projectId: "webtech-house-b3de0",
  storageBucket: "webtech-house-b3de0.appspot.com",
  messagingSenderId: "625390089511",
  appId: "1:625390089511:web:c1a192acf7f8f1663d2502"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth; 