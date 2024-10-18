import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD7bmzzZ4icAovImIYkrCZzz0Ps_e96IoI",
    authDomain: "zestype-0.firebaseapp.com",
    projectId: "zestype-0",
    storageBucket: "zestype-0.appspot.com",
    messagingSenderId: "124316283966",
    appId: "1:124316283966:web:ef3ee7481235d27a1a8d6f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export {auth, db};
