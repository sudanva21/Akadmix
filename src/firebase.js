import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBF9mnXnuvhBhclOYEcVSyJBQySTdUxQWM",
  authDomain: "akadmix-admin.firebaseapp.com",
  projectId: "akadmix-admin",
  storageBucket: "akadmix-admin.firebasestorage.app",
  messagingSenderId: "83730659683",
  appId: "1:83730659683:web:f90605390a187cd1c7bb56",
  measurementId: "G-P1B90MZZK6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, serverTimestamp };
export default app;
