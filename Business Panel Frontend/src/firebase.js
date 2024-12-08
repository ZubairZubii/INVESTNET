// firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATzLp_EgxcoZ2HYo9rZej_XtrogeTlHqU",
  authDomain: "investnet-b11bd.firebaseapp.com",
  projectId: "investnet-b11bd",
  storageBucket: "investnet-b11bd.firebasestorage.app",
  messagingSenderId: "452543084514",
  appId: "1:452543084514:web:e4a40c42e3535bdda56bbb",
  measurementId: "G-BDGJ3L9NPK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

/**
 * Sign up a new user with email and password
 * @param {string} email - User's email address
 * @param {string} password - User's password
 * @returns {Promise} - Firebase Auth user credential
 */
const signUpWithEmail = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User signed up successfully:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing up with email:", error.message);
    throw error;
  }
};

export { auth, googleProvider, signUpWithEmail };
