// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADO7bcp7UCtJySkEn52usgkfYtj997exM",
  authDomain: "fire2-f2864.firebaseapp.com",
  projectId: "fire2-f2864",
  storageBucket: "fire2-f2864.appspot.com",
  messagingSenderId: "655756418177",
  appId: "1:655756418177:web:46cfb2d5981293a24ec180",
  measurementId: "G-V2RX6DS4RS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);

export { auth };
