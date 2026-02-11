# Firebase Google Sign-In Demo

A simple HTML/CSS/JavaScript project demonstrating Google authentication using Firebase.

## Setup Instructions

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Enter a project name and follow the setup wizard
4. Once created, you'll be taken to your project dashboard

### 2. Enable Google Sign-In

1. In your Firebase project, go to **Authentication** from the left sidebar
2. Click on the **Sign-in method** tab
3. Click on **Google** in the providers list
4. Toggle the **Enable** switch
5. Enter a project support email
6. Click **Save**

### 3. Register Your Web App

1. In your Firebase project, click the **gear icon** (⚙️) next to "Project Overview"
2. Select **Project settings**
3. Scroll down to "Your apps" section
4. Click the **Web icon** (</>)
5. Register your app with a nickname (e.g., "Google Sign-In Demo")
6. You'll get a Firebase configuration object - copy this!

### 4. Configure Your App

1. Open the `app.js` file
2. Replace the `firebaseConfig` object with your own configuration:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

### 5. Set Up Authorized Domains

1. In Firebase Console, go to **Authentication** > **Settings** > **Authorized domains**
2. Add `localhost` if it's not already there (for local testing)
3. Later, add your production domain when you deploy

### 6. Run the Project

Since this uses ES6 modules, you need to run it through a local server. Here are three approaches:

---

#### **Option 1: VS Code Live Server** (Recommended - Easiest)

**Requirements:** VS Code installed

**Steps:**
1. Install the "Live Server" extension in VS Code
2. Open your project folder in VS Code
3. Right-click on `index.html`
4. Select "Open with Live Server"
5. Your browser will open at `http://localhost:5500` (or similar port)

**Note:** Make sure Live Server uses `localhost` instead of `127.0.0.1`:
- Go to VS Code Settings (Ctrl+, or Cmd+,)
- Search for "Live Server"
- Find "Live Server > Settings: Use Local Ip"
- **Uncheck** this option
- Restart Live Server

---

#### **Option 2: Python HTTP Server** (No Installation Required)

**Requirements:** Python (pre-installed on Mac/Linux, usually on Windows)

**Check if you have Python:**
```bash
python3 --version
# or
python --version
```

**Run the server:**
```bash
# Python 3
python3 -m http.server 5500

# Python 2 (if you only have Python 2)
python -m SimpleHTTPServer 5500
```

**Access the app:**
- Open your browser to `http://localhost:5500`
- Press `Ctrl+C` in the terminal to stop the server

---

#### **Option 3: Node.js http-server**

**Requirements:** Node.js installed ([Download here](https://nodejs.org/))

**Check if you have Node.js:**
```bash
node --version
npm --version
```

**Run the server:**
```bash
# This will work without installing http-server globally
npx http-server -p 5500 -a localhost
```

**Access the app:**
- Open your browser to `http://localhost:5500`
- Press `Ctrl+C` in the terminal to stop the server

**Note:** The `-a localhost` flag ensures it binds to `localhost` instead of `127.0.0.1`

---

### Which option should you choose?

- **Live Server**: Best for VS Code users, easiest setup
- **Python**: Best if you want zero installation (already have Python)
- **Node.js**: Best if you're familiar with Node.js ecosystem

## Project Structure

```
firebase-google-signin/
│
├── index.html      # Main HTML file with UI
├── style.css       # Styling for the interface
├── app.js          # Firebase configuration and authentication logic
└── README.md       # This file
```

## Features

- ✅ Google Sign-In with popup
- ✅ Display user profile (name, email, photo)
- ✅ Sign out functionality
- ✅ Authentication state persistence
- ✅ Responsive design
- ✅ Loading states

## Security Notes

- Never commit your Firebase configuration with real credentials to public repositories
- Use environment variables or Firebase Hosting for production
- Configure proper security rules in Firebase Console

## Troubleshooting

**Error: "This domain is not authorized"**
- Make sure your domain is listed in Firebase Console > Authentication > Settings > Authorized domains
- **Important:** Use `http://localhost:PORT` instead of `http://127.0.0.1:PORT`
- Firebase doesn't allow `127.0.0.1` with port numbers as authorized domains
- `localhost` is typically pre-authorized by Firebase by default
- If `localhost` isn't authorized, add it manually (just type `localhost`, no http:// or port number)

**Error: "Firebase not initialized"**
- Check that your firebaseConfig is correct
- Ensure all values are replaced (no "YOUR_" placeholders)

**Sign-in popup blocked**
- Make sure popups are allowed for your domain
- Try using `signInWithRedirect` instead of `signInWithPopup` if issues persist

**Live Server using 127.0.0.1 instead of localhost**
- Go to VS Code Settings
- Search for "Live Server"
- Uncheck "Live Server > Settings: Use Local Ip"
- Restart Live Server

## Next Steps

- Add more authentication providers (Facebook, Twitter, etc.)
- Implement Firestore to store user data
- Add protected routes/pages
- Deploy to Firebase Hosting

## Resources

- [Firebase Authentication Docs](https://firebase.google.com/docs/auth)
- [Firebase Console](https://console.firebase.google.com/)