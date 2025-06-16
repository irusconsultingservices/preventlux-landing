// Firebase GitHub Login Setup
const githubLoginButton = document.getElementById('github-login-button');

githubLoginButton.addEventListener('click', async () => {
  const provider = new firebase.auth.GithubAuthProvider();
  try {
    await auth.signInWithPopup(provider);
    alert("Logged in with GitHub!");
  } catch (error) {
    alert(error.message);
  }
});

// Logout functionality
const logoutButton = document.getElementById('logout-button');
logoutButton.addEventListener('click', () => {
  auth.signOut().then(() => {
    alert("Logged out!");
    logoutButton.style.display = 'none';
  });
});

// Listen for authentication changes
auth.onAuthStateChanged(user => {
  if (user) {
    console.log("User logged in:", user);
    logoutButton.style.display = 'inline-block';
  } else {
    logoutButton.style.display = 'none';
  }
});
