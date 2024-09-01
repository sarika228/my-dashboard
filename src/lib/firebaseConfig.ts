import { initializeApp, getApp, getApps } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBjGWDH-zBjJyEY2TsoBM-bWKj0fe97vSA",
  authDomain: "my-nextjs-dashboard.firebaseapp.com",
  databaseURL: "https://my-nextjs-dashboard-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-nextjs-dashboard",
  storageBucket: "my-nextjs-dashboard.appspot.com",
  messagingSenderId: "866084282294",
  appId: "1:866084282294:web:7a3e200bf69e535c6c2b17",
  measurementId: "G-KFEWQ61WPQ"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const database = getDatabase(app);

export { app, database };
