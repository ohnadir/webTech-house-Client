import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_api_Key,
  authDomain:process.env.REACT_APP_auth_Domain,
  projectId:process.env.REACT_APP_project_Id,
  storageBucket:process.env.REACT_APP_storage_Bucket,
  messagingSenderId:process.env.REACT_APP_messaging_Sender_Id,
  appId:process.env.REACT_APP_app_Id
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth; 