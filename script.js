//your JS code here. If required.
const submit = document.getElementById("Submit");

submit.addEventListener("click",printMeassage);

function printMeassage(event){
  event.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phoneNumber = document.getElementById("number").value;
  const emailID = document.getElementById("emailID").value;


  const message = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailID}`;
                 
  alert(message);

}