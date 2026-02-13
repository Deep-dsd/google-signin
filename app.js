import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// DOM elements
const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');
const signInSection = document.getElementById('signInSection');
const userSection = document.getElementById('userSection');
const loadingSection = document.getElementById('loadingSection');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userPhoto = document.getElementById('userPhoto');
const blobBg = document.querySelector('.blob-bg');
const waveBg = document.querySelector('.wave-bg');

// Sign in with Google
signInBtn.addEventListener('click', async () => {
    try {
        showLoading();
        const result = await signInWithPopup(auth, provider);
        console.log('User signed in:', result.user);
    } catch (error) {
        console.error('Sign in error:', error);
        alert('Failed to sign in. Please try again.');
        showSignIn();
    }
});

// Sign out
signOutBtn.addEventListener('click', async () => {
    try {
        await signOut(auth);
        console.log('User signed out');
    } catch (error) {
        console.error('Sign out error:', error);
        alert('Failed to sign out. Please try again.');
    }
});

// Auth state observer
onAuthStateChanged(auth, (user) => {
    if (user) {
        displayUserProfile(user);
    } else {
        showSignIn();
    }
});

// Display user profile
function displayUserProfile(user) {
    userName.textContent = user.displayName || 'No name';
    userEmail.textContent = user.email || 'No email';
    
    // Handle profile photo with fallback
    if (user.photoURL) {
        userPhoto.src = user.photoURL;
        userPhoto.onerror = function() {
            // Fallback to UI Avatars if Google photo fails to load
            this.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user.displayName || 'User') + '&size=88&background=e8697a&color=fff&bold=true';
        };
    } else {
        userPhoto.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user.displayName || 'User') + '&size=88&background=e8697a&color=fff&bold=true';
    }
    
    signInSection.classList.add('hidden');
    loadingSection.classList.add('hidden');
    userSection.classList.remove('hidden');
    
    // Switch to wave background
    blobBg.classList.add('hidden');
    waveBg.classList.remove('hidden');
}

// Show sign in screen
function showSignIn() {
    signInSection.classList.remove('hidden');
    userSection.classList.add('hidden');
    loadingSection.classList.add('hidden');
    
    // Switch to blob background
    blobBg.classList.remove('hidden');
    waveBg.classList.add('hidden');
}

// Show loading screen
function showLoading() {
    signInSection.classList.add('hidden');
    userSection.classList.add('hidden');
    loadingSection.classList.remove('hidden');
}