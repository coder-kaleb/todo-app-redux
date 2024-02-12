import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAcwKOr3hyjsvgJzrQdNklqISAYfiI5bYk",
  authDomain: "todo-redux-18300.firebaseapp.com",
  projectId: "todo-redux-18300",
  storageBucket: "todo-redux-18300.appspot.com",
  messagingSenderId: "108035247151",
  appId: "1:108035247151:web:a0b40e44829eefe5584ada",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
