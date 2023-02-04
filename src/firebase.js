import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_h5pw7NkIJIRngnVRPVqjEWUCgnu-exg",
  authDomain: "netflix-clone-2360b.firebaseapp.com",
  projectId: "netflix-clone-2360b",
  storageBucket: "netflix-clone-2360b.appspot.com",
  messagingSenderId: "255156774245",
  appId: "1:255156774245:web:33014f516f4c4955dbed8c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
