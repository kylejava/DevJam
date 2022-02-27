logout.addEventListener('click',(e)=>{

    signOut(auth).then(() => {
      // Sign-out successful.
      alert('user loged out');
    }).catch((error) => {
      // An error happened.
      const errorCode = error.code;
      const errorMessage = error.message;
 
         alert(errorMessage);
    });
 
 });