// Import the functions you need from the SDKs you need
import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCykk6xAJufmztaNpUHWv5wmD-L0QnC4R0",
  authDomain: "netflixgpt-acdab.firebaseapp.com",
  projectId: "netflixgpt-acdab",
  storageBucket: "netflixgpt-acdab.firebasestorage.app",
  messagingSenderId: "781007787469",
  appId: "1:781007787469:web:b5a97c1fb546ecd7b56084",
  measurementId: "G-23S52G16M3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const auth = getAuth();