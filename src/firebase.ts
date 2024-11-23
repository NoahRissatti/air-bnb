import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAjcOM_fsAoGVskRs8kyCFqm0luwGPzUSA",
  authDomain: "react-upload-e0635.firebaseapp.com",
  projectId: "react-upload-e0635",
  storageBucket: "react-upload-e0635.firebasestorage.app",
  messagingSenderId: "515102655964",
  appId: "1:515102655964:web:b596b9eb00a7068010bb19",
  measurementId: "G-Z46SVC0Y2J",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
