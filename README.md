This repository demonstrates a common issue with Firebase's `onAuthStateChanged` listener: memory leaks.  The `onAuthStateChanged` function returns an unsubscribe function that MUST be called when the component or function using it unmounts or is no longer needed. Failure to do so will result in the listener continuing to run indefinitely, leading to potential performance issues and memory leaks.  The `bug.js` file shows the problematic code, and `bugSolution.js` provides the corrected version.