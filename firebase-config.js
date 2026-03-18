import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCOB7ofLrXqReBwNPk1LVbr-w2nyI30mTs",
  authDomain: "frichnfries.firebaseapp.com",
  projectId: "frichnfries",
  storageBucket: "frichnfries.firebasestorage.app",
  messagingSenderId: "752431193967",
  appId: "1:752431193967:web:882b9ad4e15d9be1ec529a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);