import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyDVmYID7GvGMeXJ3eBktkLwpTwn79SRYE8",
  authDomain: "e-perfect.firebaseapp.com",
  projectId: "e-perfect",
  storageBucket: "e-perfect.firebasestorage.app",
  messagingSenderId: "823756908481",
  appId: "1:823756908481:web:d51491469ac04b689ab140",
  measurementId: "G-NP3NK5SZGS",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const postsCol = collection(db, "posts");
export const postsQuery = query(postsCol, orderBy("createdAt", "desc"));
