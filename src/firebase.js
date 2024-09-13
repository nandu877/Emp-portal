
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZEWUwclsGnGMNbuhPtw7LiK-xqMb2Djo",
  authDomain: "ascus-b200a.firebaseapp.com",
  projectId: "ascus-b200a",
  storageBucket: "ascus-b200a.appspot.com",
  messagingSenderId: "750014454077",
  appId: "1:750014454077:web:99184af6bb6d3732178d54",
  measurementId: "G-4BH0VDR85T"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the storage and firestore
const storage = getStorage(app);
const firestore = getFirestore(app);

export { storage, firestore };