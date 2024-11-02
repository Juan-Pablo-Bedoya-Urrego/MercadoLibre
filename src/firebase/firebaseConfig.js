import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBn36KVUpSjEiKgzq_l2t07IJX3kGnvtVU",
    authDomain: "pruebas-f2942.firebaseapp.com",
    projectId: "pruebas-f2942",
    storageBucket: "pruebas-f2942.appspot.com",
    messagingSenderId: "264911803677",
    appId: "1:264911803677:web:ebe78ba175b5afb4613df4",
    measurementId: "G-V5KJSKQBCC"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db };
