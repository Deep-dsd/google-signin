import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

// Your Firebase configuration
// TODO: Replace with your own Firebase config from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyCje2eiMJMQXbZbzW-pAN-CYvzjyPJHSfM",
  authDomain: "signin-55c30.firebaseapp.com",
  projectId: "signin-55c30",
  storageBucket: "signin-55c30.firebasestorage.app",
  messagingSenderId: "852583231326",
  appId: "1:852583231326:web:bea3e9bece7541c82d29cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Get DOM elements
const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');
const signInSection = document.getElementById('signInSection');
const userSection = document.getElementById('userSection');
const loadingSection = document.getElementById('loadingSection');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userPhoto = document.getElementById('userPhoto');

// Sign in with Google
signInBtn.addEventListener('click', async () => {
    try {
        showLoading();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log('User signed in:', user);
        // UI will be updated by onAuthStateChanged
    } catch (error) {
        console.error('Error during sign in:', error);
        alert('Failed to sign in: ' + error.message);
        showSignIn();
    }
});

// Sign out
signOutBtn.addEventListener('click', async () => {
    try {
        await signOut(auth);
        console.log('User signed out');
        // UI will be updated by onAuthStateChanged
    } catch (error) {
        console.error('Error during sign out:', error);
        alert('Failed to sign out: ' + error.message);
    }
});

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        displayUserProfile(user);
    } else {
        // User is signed out
        showSignIn();
    }
});

// Display user profile
function displayUserProfile(user) {
    userName.textContent = user.displayName || 'No name';
    userEmail.textContent = user.email || 'No email';
    userPhoto.src = user.photoURL || 'https://via.placeholder.com/80';
    
    signInSection.classList.add('hidden');
    loadingSection.classList.add('hidden');
    userSection.classList.remove('hidden');
}

// Show sign in screen
function showSignIn() {
    signInSection.classList.remove('hidden');
    userSection.classList.add('hidden');
    loadingSection.classList.add('hidden');
}

// Show loading screen
function showLoading() {
    signInSection.classList.add('hidden');
    userSection.classList.add('hidden');
    loadingSection.classList.remove('hidden');
}