import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, onSnapshot } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCBnPUoxMtk4WSzAeF_o0Xm9Nejs5gEp7Q',
  authDomain: 'bun-firestore-repro.firebaseapp.com',
  projectId: 'bun-firestore-repro',
  storageBucket: 'bun-firestore-repro.firebasestorage.app',
  messagingSenderId: '954652543504',
  appId: '1:954652543504:web:0f74788d91810c904c1895',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log('Firebase initialized');

const collectionRef = collection(db, 'test-collection');

onSnapshot(collectionRef, (snapshot) => {
  console.log(snapshot.docs.map((doc) => doc.data()));
});
