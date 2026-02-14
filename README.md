# Firebase Google Sign-In Demo

A simple HTML/CSS/JavaScript project demonstrating Google authentication using Firebase.

## Setup Instructions

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Enter a project name and follow the setup wizard

### 2. Enable Google Sign-In

1. In your Firebase project, Expand **Build** from the left sidebar and go to **Authentication**
2. Click on the **Get started** or **Set up sign-in menthod** button
3. Click on **Google** in the Additional providers list
4. Toggle the **Enable** switch
5. Enter a project support email
6. Click **Save**

### 3. Register Your Web App

1. Click the **gear icon** (⚙️) next to "Project Overview"
2. Select **General**
3. Scroll down to "Your apps" section
4. Click the **Web icon** (</>)
5. Register your app with a nickname
6. Copy the Firebase configuration object

### 4. Configure Your App

Open the `app.js` file and replace the `firebaseConfig` object with your configuration:

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

**Important for VS Code Live Server users:**
- Go to VS Code Settings (Ctrl+, or Cmd+,)
- Search for "Live Server"
- Find "Live Server > Settings: Use Local Ip"
- **Uncheck** this option to ensure it uses `localhost` instead of `127.0.0.1`

### 6. Run the Project

Since this uses ES6 modules, you need to run it through a local server:

**Using Python:**
```bash
python3 -m http.server 5500 -b localhost
```
- Then open your browser to [Local Server](http://localhost:5500/)

**Using VS Code:**
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

**Using Node.js:**
```bash
npx http-server -p 5500 -a localhost
```

Then open your browser to `http://localhost:5500`

## Troubleshooting

**Error: "This domain is not authorized"**
- Make sure your domain is listed in Firebase Console > Authentication > Settings > Authorized domains
- Use `http://localhost:PORT` instead of `http://127.0.0.1:PORT`
- Firebase doesn't allow `127.0.0.1` with port numbers as authorized domains
- `localhost` is typically pre-authorized by Firebase by default

**Error: "Firebase not initialized"**
- Check that your firebaseConfig is correct
- Ensure all values are replaced (no "YOUR_" placeholders)

**Sign-in popup blocked**
- Make sure popups are allowed for your domain
- Try using `signInWithRedirect` instead of `signInWithPopup` if issues persist

**Live Server using 127.0.0.1 instead of localhost**
- Go to VS Code Settings
- Search for "Live Server"
- Go to Live Server > Settings:Host
- Change the Host name to **localhost**
- Restart Live Server

**Profile picture not loading**
- This is normal - Google profile images require proper referrer policies
- The app includes fallback to show user initials if the photo fails to load