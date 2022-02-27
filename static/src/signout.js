
function signOut(){
  firebase.auth().signOut().then(function() {
    alert('Signed Out');
    location.href = '/';
  }, function(error) {
    alert('Sign Out Error', error);
  });
}
