// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBuDlozI_7JzWxaKFLYMccl6AgalnGwG9E",
    authDomain: "netflix-7fde6.firebaseapp.com",
    projectId: "netflix-7fde6",
    storageBucket: "netflix-7fde6.appspot.com",
    messagingSenderId: "324618629315",
    appId: "1:324618629315:web:3951f1cf01294b7708b276",
    measurementId: "G-46MRWKDG0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);