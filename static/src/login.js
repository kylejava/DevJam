function login(){
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  alert(email);
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
    alert(user);
  }
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });`

}
