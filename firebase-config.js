'use strict';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'YOUR_API_KEY', // Replace with your actual API key
    authDomain: 'YOUR_AUTH_DOMAIN', // Replace with your actual auth domain
    projectId: 'YOUR_PROJECT_ID', // Replace with your actual project ID
    storageBucket: 'YOUR_STORAGE_BUCKET', // Replace with your actual storage bucket
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID', // Replace with your actual messaging sender ID
    appId: 'YOUR_APP_ID' // Replace with your actual app ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Set up Google Authentication provider
const provider = new GoogleAuthProvider();

export { auth, provider };