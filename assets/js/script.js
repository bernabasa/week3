// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword () {
    
// asl length
var askLength = window.prompt("How long do you want your password? It must be in between 8 and 128!");


askLength = parseInt(askLength)


if(askLength >= 8 && askLength <=128) {
    console.log(true);
} else {
    window.alert("Your input is invailed! please enter a new password.");
}
};




// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
  
    passwordText.value = password;

  
  };
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

