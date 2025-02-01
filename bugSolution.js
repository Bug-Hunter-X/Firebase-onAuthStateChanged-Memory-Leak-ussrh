const unsubscribe = onAuthStateChanged(auth, (user) => {
if (user) {
  // User is signed in...
} else {
  // User is signed out...
}
});

// ... later, when the listener is no longer needed...
unsubscribe();