// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { APP_CONFIGS } from './app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: APP_CONFIGS.API_KEY,
  authDomain: APP_CONFIGS.AUTH_DOMAIN,
  projectId: APP_CONFIGS.PROJECT_ID,
  storageBucket: APP_CONFIGS.STORAGE_BUCKET,
  messagingSenderId: APP_CONFIGS.MESSAGING_SENDER_ID,
  appId: APP_CONFIGS.APP_ID
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {
  db, auth, provider
}