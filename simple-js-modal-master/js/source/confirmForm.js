// Get the modal 1
var modal = document.getElementById('myModal');

// Get the main container and the body
var body = document.getElementsByTagName('body');
var container = document.getElementById('myContainer');

// Get the open button
var btnOpen = document.getElementById("submitContainer");

// Get the close button
var btnClose = document.getElementById("closeModal");

// Open the modal
btnOpen.onclick = function() {
    modal.className = "Modal is-visuallyHidden";
    setTimeout(function() {
      //container.className = "formBody is-hidden";
	 /* $(".formBody iframe").css("box-shadow","none");
	  $(".formBody iframe .Close").css("display','none needs to be applied to signouts container*/
      modal.className = "Modal";
    }, 100);
    container.parentElement.className = "gradient ModalOpen";//adds ModalOpen class to body
}

// Close the modal
btnClose.onclick = function() {
    modal.className = "Modal is-hidden is-visuallyHidden";
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

/*MODAL 2*/
// Get the modal 2
var modal2 = document.getElementById('myModal2');

// Get the main container and the body
//var body = document.getElementsByTagName('body');
//var container = document.getElementById('myContainer');

// Get the open button for confirm
var btnOpenConfirm = document.getElementById("submitForm");

// Get the close button
var btnClose2 = document.getElementById("closeModal2");

// Open the modal
btnOpenConfirm.onclick = function() {
	//close other modal
	modal.className = "Modal is-hidden is-visuallyHidden";
    modal2.className = "Modal is-visuallyHidden";
	alert("close form clicked");
    setTimeout(function() {
      //container.className = "formBody is-hidden";
	 /* $(".formBody iframe").css("box-shadow","none");
	  $(".formBody iframe .Close").css("display','none needs to be applied to signouts container*/
      modal2.className = "Modal";
    }, 100);
    container.parentElement.className = "gradient ModalOpen";//adds ModalOpen class to body
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
