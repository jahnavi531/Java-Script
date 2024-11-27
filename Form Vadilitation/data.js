function validateForm(){
   // alert("Test case 123");

    let email = document.getElementById('email').value;

    if(email==""){
       // alert("please enter email")
       document.getElementById('email Msg').innerHTML="please Enter email Id";
}
else{
    alert(email)
}
return false;
}

