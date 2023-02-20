// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ8od8SgYHye0I0naRinkIWd6tq2marDY",
  authDomain: "todo-app-df669.firebaseapp.com",
  projectId: "todo-app-df669",
  storageBucket: "todo-app-df669.appspot.com",
  messagingSenderId: "955448555311",
  appId: "1:955448555311:web:cb58c6e2fd5ace916a13da",
  measurementId: "G-SRX3LCRQVC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;