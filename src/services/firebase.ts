import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYPgWzGSRPvRfjlA80qWHmL6izc398kq0",
  authDomain: "authenticationapp-4c560.firebaseapp.com",
  projectId: "authenticationapp-4c560",
  storageBucket: "authenticationapp-4c560.appspot.com",
  messagingSenderId: "488846175350",
  appId: "1:488846175350:web:8524ed80b5f13a759e8357"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);