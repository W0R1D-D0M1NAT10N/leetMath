// Firebase configuration (replace with your own project values)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const signupForm = document.getElementById('signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    auth.createUserWithEmailAndPassword(email, password).catch(console.error);
  });
}

const signinForm = document.getElementById('signin-form');
if (signinForm) {
  signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    auth.signInWithEmailAndPassword(email, password).catch(console.error);
  });
}

fetch('/data/problems.json')
  .then(r => r.json())
  .then(problems => console.log('Loaded problems', problems));
