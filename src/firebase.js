import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import initializeApp from "firebase/app"


const firebaseConfig = {
    apiKey: "AIzaSyAf3qpq9VjnHTA1a--CqGrQ6DOe8b6kv2M",
    authDomain: "linkedin-clone-3d071.firebaseapp.com",
    projectId: "linkedin-clone-3d071",
    storageBucket: "linkedin-clone-3d071.appspot.com",
    messagingSenderId: "250434562848",
    appId: "1:250434562848:web:b680b7fcde8a3eb0f9c545"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, provider, storage };
export default db;