import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB3tadpttkR2g_ErwP993E54tRTrts2t5w",
  authDomain: "clone-full-26b84.firebaseapp.com",
  projectId: "clone-full-26b84",
  storageBucket: "clone-full-26b84.appspot.com",
  messagingSenderId: "803783824905",
  appId: "1:803783824905:web:1d0f3d4a947bc86a3acad8",
  measurementId: "G-CM32BS2FX9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
