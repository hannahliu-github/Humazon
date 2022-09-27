import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyA5TIHEh3_wO2WwusZUZz4m_SiLdJwn5nc",
        authDomain: "humazon-9-9-2019.firebaseapp.com",
        projectId: "humazon-9-9-2019",
        storageBucket: "humazon-9-9-2019.appspot.com",
        messagingSenderId: "1057294237231",
        appId: "1:1057294237231:web:25a622619c25b5eb9310da",
        measurementId: "G-2Y3ENWWWX5"
    };

    // Initialize Firebase
    const firebaseApp = firebase.initializeApp(firebaseConfig);

    const db = firebaseApp.firestore();
    const auth = firebase.auth();

export { db, auth };