alert("HEY LOOK ITS A PASSWORD GAME!")
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * 8));
  }
  return retVal;


  console.log(password)}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
return password()
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);






// Generator functions


function getRandomLower() {


}

console.log(String.fromCharCode(97));