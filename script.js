function validateForm()
{
var phone = document.getElementById("phone").value;
var email = document.getElementById("email).value;
if(phone.length!=9)
{
alert("Phone number invalid!");
return false;
}
if (isNaN(phone))
{
alert("phone number must contain only digits");
return false;
}
if (!email.includes("@")) {
alert("Enter a valid email");
return false;
}
alert("Registration successful");
return true;
}
