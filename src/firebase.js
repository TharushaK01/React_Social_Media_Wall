// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJIMyrOF6nSMsWpyHp3OZ11C403LmlpRU",
    authDomain: "media-dc8eb.firebaseapp.com",
    projectId: "media-dc8eb",
    storageBucket: "media-dc8eb.appspot.com",
    messagingSenderId: "589175041004",
    appId: "1:589175041004:web:b2c1acc10c797fa1776ec9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)