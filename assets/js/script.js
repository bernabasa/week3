// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword () {
    
// ask legnth
var askLength = window.prompt("How long do you want your password? It must be in between 8 and 128!");
var askUppercase = window.confirm ("Would you like to include uppercase characters?");

askLength = parseInt(askLength)
if(askLength >= 8 && askLength <=128) {
    console.log(true);
} else {
    window.alert("Your input is invailed! please enter a new password.");
}
if (askUppercase)

}

// ask uppercase
// ask lowercase
// ask for numbers
// ask for especial characters




console.log()
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
  
    passwordText.value = password;

  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
