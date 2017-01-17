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

function ValidateEmail(mail)   
{  
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailInput.value))  
  {  
    return (true)  
  }  
    alert("You have entered an invalid email address!")  
    return (false)  
}  

// Open the modal
btnOpenConfirm.onclick = function() {
	//close other modal
	// validation fails if the input is 
	//var form1 = document.getElementById("signUp");  
    var fName = document.getElementById("firstNameInput"); 
    var lName = document.getElementById("lastNameInput"); 
    var email = document.getElementById("emailInput"); 
    var month = document.getElementById("#monthInput");
    var year = document.getElementById("#yearInput");

    if(fName.value === "") {
		  /*alert("Error: Input is empty!");*/
          console.log("fname blank");
		  fName.focus();
		  return false;
    }else if(lName.value === "") {
		  /*alert("Error: Input is empty!");*/
          console.log("lname blank");
		  lName.focus();
		  return false;
    }else if(email.value === "") {
		  /*alert("Error: Input is empty!");*/
          console.log("email error");
		  email.focus();
		  return false;
    }else{
        
        // var win = window.open('../../../../../../landing-JoinConfirm.html','_blank');
        // win.focus();
        console.log("in else");
		modal.className = "Modal is-hidden is-visuallyHidden"; //hides form
		//modal2.className = "Modal is-visuallyHidden"; 
		setTimeout(function() {
            console.log("in timeout");
		  modal2.className = "Modal"; //showing confirmation form
		}, 500);
        postContactToGoogle();
		container.parentElement.className = "gradient ModalOpen";//adds ModalOpen class to body
		return true;
	}
}

function postContactToGoogle(){
	console.log("Posting to Google");
    var fName = document.getElementById("firstNameInput").value; 
    var lName = document.getElementById("lastNameInput").value; 
    var email = document.getElementById("emailInput").value; 
    var month = document.getElementById("monthInput").value;
    var year = document.getElementById("yearInput").value;
    // var country = document.getElementById("#country").value;
    console.log("First Name: ", fName);
    console.log("Last Name: ", lName);
    console.log("Email : ", email);
    console.log("Month : ", month);
    console.log("Year : ", year);
    if ((fName !== "") && (lName !== "") && (email !== "") && ((month !== ""))) {
       	$.ajax({
           	url: "https://docs.google.com/a/hyperafrica.com/forms/d/e/1FAIpQLSd-6UQ3YGYBMw3wro8kAaULIeUV77wCgmscfDqh2gw3IJ_eFQ/formResponse",
            data: {"entry.1" : fName, "entry.2": lName, "entry.3" : email, "entry.4": month, "entry.5": year},
            type: "POST",
          	dataType: "xml",
         	statusCode: {
             	0: function (){
                            console.log("Success");
                        	//Success message
                    	},
                    	200: function (){
                        	console.log("In 200");
                        	//Success Message
                    	}
                	}
            	});
        	}
        	else {
            	//Error message
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
