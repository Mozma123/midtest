// // src/services/firebase.js
// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyCvLOKDW3lQOyPgog9VVCS3s_7PKRfEPsY",
//     authDomain: "reactfirebasewebsite-f0e18.firebaseapp.com",
//     databaseURL: "https://reactfirebasewebsite-f0e18-default-rtdb.firebaseio.com",
//     projectId: "reactfirebasewebsite-f0e18",
//     storageBucket: "reactfirebasewebsite-f0e18.firebasestorage.app",
//     messagingSenderId: "445357866929",
//     appId: "1:445357866929:web:0a455fd1508b41ae070790"
//   };

// firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();
// const auth = firebase.auth();

// export { db, auth };


// Import the functions you need from the Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration (replace with your actual config)
const firebaseConfig = {
      apiKey: "AIzaSyBhtX0M2sNPaO2ABG4AMo7W4qEZcm4eJMs",
      authDomain: "firstproject01-d49bd.firebaseapp.com",
      projectId: "firstproject01-d49bd",
      storageBucket: "firstproject01-d49bd.firebasestorage.app",
      messagingSenderId: "127690446908",
      appId: "1:127690446908:web:b4516d0ec3066f607d8b39",
      measurementId: "G-22KX2BVMVC"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
