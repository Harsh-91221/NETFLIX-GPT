// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCDACcAq8zKwRjM4Qh3p9qyJSa-deYoyIc",
    authDomain: "netflixgpt-dd58c.firebaseapp.com",
    projectId: "netflixgpt-dd58c",
    storageBucket: "netflixgpt-dd58c.appspot.com",
    messagingSenderId: "237002712302",
    appId: "1:237002712302:web:c913bce20bd9733b7f3fff",
    measurementId: "G-K04H5HKY54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();