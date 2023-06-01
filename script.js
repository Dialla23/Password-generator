// Assignment code here
function generatePassword() {
  var length = 8,
  charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
  retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
  }

// Get references to the #generate element
var generateBtn = document.querySelector("#password");
console.log();


// Write password to the #password input
function writePassword() {
  var password = generatePassword(password);
  var passwordText = document.querySelector("#password");
  console.log();
  passwordText.value = password;

  
}

// Add event listener to generate button
let sign = prompt("password");

if (sign.toLowerCase() === "scorpio") {
  alert("Wow! I'm a Scorpio too!");
}
generateBtn.addEventListener("click", writePassword);
