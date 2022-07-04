import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAOeTPWCT9xkEHE36tq9Yg2HtQh3JbXloI",
//   authDomain: "todoapp-33ba6.firebaseapp.com",
//   projectId: "todoapp-33ba6",
//   storageBucket: "todoapp-33ba6.appspot.com",
//   messagingSenderId: "833029686548",
//   appId: "1:833029686548:web:1787d7f83730e1eabaae01",
//   measurementId: "G-K9D560SCJP",
// };
const firebaseConfig = {
  apiKey: "AIzaSyBYtqQeo2gAdmHyUijxayonjGIEOem88jQ",
  authDomain: "todoapp-82fc9.firebaseapp.com",
  projectId: "todoapp-82fc9",
  storageBucket: "todoapp-82fc9.appspot.com",
  messagingSenderId: "1031905009777",
  appId: "1:1031905009777:web:2651933c4a88d98f9cbbd0",
  measurementId: "G-2CC1WDTNQ6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
