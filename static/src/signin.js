
email = document.getElementById('email');
password = document.getElementById('password');

firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
      if (user['user']['emailVerified'] == false){
        alert("Incorrect credentials. Retry")
      }
    // Signed in
    location.href = "/templates/user-table.html";
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
