// Get the modal
var modal = document.getElementById('myModal');

// Get the main container and the body
var body = document.getElementsByTagName('body');
var container = document.getElementById('myContainer');

// Get the open button
var btnOpen = document.getElementById("sendMoneyContainer");

// Get the close button
var btnClose = document.getElementById("closeModal");

// Open the modal
btnOpen.onclick = function() {

    modal.className = "Modal is-visuallyHidden";
    setTimeout(function() {
      container.className = "MainContainer is-blurred";
      modal.className = "Modal";
    }, 100);
    container.parentElement.className = "gradient ModalOpen";//adds ModalOpen class to body

}

// Close the modal
btnClose.onclick = function() {
    modal.className = "Modal is-hidden is-visuallyHidden";
    body.className = "gradient"; //return class gradient to body
    container.className = "MainContainer";
    container.parentElement.className = "gradient"; //return class gradient to body
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.className = "Modal is-hidden";
        body.className = "gradient"; //return class gradient to body
        container.className = "MainContainer";
        container.parentElement.className = "gradient"; //return class gradient to body
    }
}


/*MODAL 2*/
// Get the modal 2
var modal2 = document.getElementById('myModal2');

// Get the main container and the body
//var body = document.getElementsByTagName('body');
//var container = document.getElementById('myContainer');

// Get the open button for confirm
var btnOpenConfirm = document.getElementById("submitForm");

// Get the close button
var btnClose2 = document.getElementById("closeConfirm");

// Open the modal
btnOpenConfirm.onclick = function() {
	//close other modal
	// validation fails if the input is 
	//var form1 = document.getElementById("signUp");  
    var fName = document.getElementById("firstNameInput");
    var lName = document.getElementById("lastNameInput");
    var email = document.getElementById("emailInput");
    if(fName.value === "") {
		  /*alert("Error: Input is empty!");*/
          console.log("firstName blank");
		  fName.focus();
		  return false;
    }else if (lName.value === "") {
		  /*alert("Error: Input is empty!");*/
          console.log("lastName blank");
		  lName.focus();
		  return false;
    }else if (email.value === "") {
		  /*alert("Error: Input is empty!");*/
          console.log("email blank");
		  email.focus();
		  return false;
    }else{
        console.log("in else statement...")
		modal.className = "Modal is-hidden is-visuallyHidden";
		modal2.className = "Modal is-visuallyHidden";
		setTimeout(function() {
		  modal2.className = "Modal";
		}, 100);
		container.parentElement.className = "gradient ModalOpen";//adds ModalOpen class to body
		return true;
	}
}

// Close the modal
btnClose2.onclick = function() {
    modal2.className = "Modal is-hidden is-visuallyHidden";
    body.className = "gradient"; //return class gradient to body
    container.className = "formBody";
    container.parentElement.className = "gradient"; //return class gradient to body
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.className = "Modal is-hidden";
        body.className = "gradient"; //return class gradient to body
        container.className = "formBody";
        container.parentElement.className = "gradient"; //return class gradient to body
    }
}
