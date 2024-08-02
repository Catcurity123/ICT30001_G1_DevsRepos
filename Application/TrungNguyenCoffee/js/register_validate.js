/* REGISTRATION FORM VALIDATION */
function register_validate() {
	var fullname = document.getElementById("fullname").value;
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var password2 = document.getElementById("password2").value;
    var email = document.getElementById("email").value;
    var postcode = document.getElementById("postcode").value;
	var genm = document.getElementById("genm").checked;
    var genf = document.getElementById("genf").checked;
    
    var register_errMsg = "";								
	var register_result = true;							
	var register_pattern = /^[a-zA-Z ]+$/;	
    var register_pattern2 = /^[a-zA-Z0-9 ]+$/;

    var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; /* validate email */
    
    const lowerCase = new RegExp('(?=.*[a-z])'); /* validate password */
    const upperCase = new RegExp('(?=.*[A-Z])');
    const eightChar = new RegExp('(?=.{8,})');
    const four_digits = new RegExp('^[0-9]{4}$'); /* validate postcode */
    
    /* Full Name */
	if (fullname == "") {
					register_errMsg += "Full name cannot be empty.\n";
					}
    else if (! fullname.match (register_pattern)) {
		register_errMsg += "Full name cannot contain symbols and numbers.\n";
	}
    
    /* Username */
    if (username == "") {
					register_errMsg += "User name cannot be empty.\n";
					}
    else if (! username.match (register_pattern2)) {
        register_errMsg += "Username cannot contain symbols\n";
    }
    
    /* Password */
    if (password == "") {
					register_errMsg += "Password cannot be empty.\n";
					}
    else if (eightChar.test(password) == false) {
        register_errMsg += "Password must be at least 8 digits.\n";
    }
    else if (lowerCase.test(password) == false) {
        register_errMsg += "Password must contain at least 1 lowercase.\n";
    }
    else if (upperCase.test(password) == false) {
        register_errMsg += "Password must contain at least 1 uppercase.\n";
    }
    
    /* Retype Password */
    if (password2 == "") {
					register_errMsg += "Retype password cannot be empty.\n";
					}
    else if (password != password2) {
		register_errMsg += "Passwords do not match.\n";
	}
    
    /* Email */
    if (email == "") {
					register_errMsg += "Email cannot be empty.\n";
					}
    else if (re.test(email) == false)  {
                    register_errMsg += "Invalid Email. \n";
                    }
    
    /* Postcode */
    if (postcode == "") {
					register_errMsg += "Postcode cannot be empty.\n";
					}
    
    else if(four_digits.test(postcode) == false)  {
                    register_errMsg += "Postcode must have 4 digits.\n";
    }
    
    /* Gender */
    if ((genm == "")&&(genf == "")) {
					register_errMsg += "A gender must be selected.\n";
                    }

    
 

    /* Alert All Errors */
	if (register_errMsg != "") {
		alert (register_errMsg);
		register_result = false;
	} 
	return register_result;
}


function init () {
    
  var registerForm = document.getElementById("registerForm");
  registerForm.onsubmit = register_validate;
    
}

window.onload = init;