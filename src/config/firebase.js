import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyA_g4kTAqtTVxZz6OG3rySH59qU-vW_j1I",
	authDomain: "reactionary-5e47a.firebaseapp.com",
	projectId: "reactionary-5e47a",
	storageBucket: "reactionary-5e47a.appspot.com",
	messagingSenderId: "163405593867",
	appId: "1:163405593867:web:9177d1199c8285166fb60e",
	measurementId: "G-ZELQPRQ22Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// FireStore
export const store = getFirestore(app);
