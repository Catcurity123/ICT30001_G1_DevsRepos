/* ORDER FORM VALIDATION */

function order_validate() {
    var delivery = document.getElementById("delivery").checked;
    var pickup = document.getElementById("pickup").checked;
	var addr = document.getElementById("addr").value;
	var billaddr = document.getElementById("billaddr").value;
	var phone = document.getElementById("phone").value;
	var email_receipt = document.getElementById("email_receipt").value;
	var pay_pickup = document.getElementById("pay_pickup").checked;
    var pay_online = document.getElementById("pay_online").checked;
    var visa = document.getElementById("visa").checked;
    var mastercard = document.getElementById("mastercard").checked;
    var express = document.getElementById("express").checked;
    var cardNum = document.getElementById("cardNum").value;
    
    var errMsg = "";
    var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	var result = true;							
    var number = /^[0-9 ]+$/;

    const eight_digits = new RegExp('^[0-9]{8}$');
    
    /* check that none of the required input fields are blank */
    if ((delivery == "")&&(pickup == "")) {
					errMsg += "Please choose your type of transport.\n";
                    }
    
    if ((delivery != "") && (addr =="")) {
					errMsg += "Delivery address cannot be empty.\n";
					}
    
    if (billaddr == "") {
					errMsg += "Billing address cannot be empty.\n";
					}
    
    /* Check phone number: at least 8 numbers, number only */
    if (phone == "") {
					errMsg += "Phone cannot be empty.\n";
					}
    else if (! phone.match (number)) {
        errMsg += "Phone must contain only numbers. \n";
                    }  
                    
    else if (eight_digits.test(phone)==false)  {
                    errMsg += "Phone number must have at least 8 numbers.\n";
                    }
    
    /* Check email */
    if (email_receipt == "") {
                    errMsg += "Email for receipt cannot be empty.\n";
					}
    
    else if (re.test(email_receipt) == false)  {
                    errMsg += "Invalid Email. \n";
                    }
    
    /* Choose type of payment */
    if ((pay_pickup == "")&&(pay_online == "")) {
					errMsg += "You must choose your type of payment.\n";
                    }
    
    /* If pay online button checked -> must choose type of credit card */
    if (document.getElementById('pay_online').checked) {
       if ((visa == "")&&(mastercard == "")&&(express == "")) {
					errMsg += "You must choose your type of credit card\n";
                    }
       }
    
    const fifteen_digits = new RegExp('^[0-9]{15}$'); 
    const sixteen_digits = new RegExp('^[0-9]{16}$'); 

    /* Visa card contains exactly 16 digits */
    if((document.getElementById('visa').checked) && (sixteen_digits.test(cardNum) == false))  {
       errMsg += "Visa must have 16 digits.\n";
    }
    
    /* Mastercard card contains exactly 16 digits */
    if((document.getElementById('mastercard').checked) && (sixteen_digits.test(cardNum) == false))  {
       errMsg += "Mastercard must have 16 digits.\n";
    }
    
    /* American Express card contains only 16 digits */
    if((document.getElementById('express').checked) && (fifteen_digits.test(cardNum) == false))  {
       errMsg += "American Express must have 15 digits.\n";
    }
    
    /* show alert */
    if (errMsg != "") {
		alert (errMsg);
		result = false;
	} 
	return result;
}

function showCreditCard() {
    var hidden2 = document.getElementById("hidden2");
    hidden2.style.display = "block";
}

function hideCreditCard() {
    var hidden2 = document.getElementById("hidden2");
    hidden2.style.display = "none";
}

function showAddress() {
    var hidden1 = document.getElementById("hidden1");
    hidden1.style.display = "block";
    hidden1.style.left = "-5px";
}

function showAddressAlert() {
    var message = document.getElementById("message");
    var check_address = document.getElementById("check_address");
    var addr = document.getElementById("addr").value;
    
        if ((check_address.checked) && (addr ==""))
        {
            message.style.display = "block";
            check_address.checked =false;
        }
    
        else if ((check_address.checked) && (addr !=""))
        {
            message.style.display = "none";
        }
    
        if(document.getElementById('check_address').checked) {
            let text1 = document.getElementById('addr').value;        
            document.getElementById('billaddr').value = text1;
        }
        else {
            document.getElementById('billaddr').value = "";
        }
        
}

function hideAddress() {
    var hidden1 = document.getElementById("hidden1");
    hidden1.style.display = "none";
}

function hideCreditCard_Address() {
    var hidden2 = document.getElementById("hidden2");
    hidden2.style.display = "none";
    var hidden1 = document.getElementById("hidden1");
    hidden1.style.display = "none";
}

function init () {
    /* hide Cerdit card field when clicking reset button */
    var reset = document.getElementById("reset");
    reset.onclick = hideCreditCard_Address;
    
    var delivery = document.getElementById("delivery");
    var pickup = document.getElementById("pickup");
    
    /* show address field when choosing delivery */
    delivery.onclick = showAddress;
    pickup.onclick = hideAddress;
    
    /* Autofill billing address and Show an alert if the checkbox is checked before entering delivery address */
    var check_address = document.getElementById("check_address");
    check_address.onclick = showAddressAlert;
    
    /* show Credit card field when choosing pay by credit card */
    var pay_pickup = document.getElementById("pay_pickup");
    var pay_online = document.getElementById("pay_online");

    pay_online.onclick = showCreditCard;
    pay_pickup.onclick = hideCreditCard;
    
    var orderForm = 	document.getElementById("orderForm");
    orderForm.onsubmit = order_validate;
     
}

window.onload = init;