
// var characterTypes
var numbers = ["1", "2", "3" , "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "@", "#","$", "%", "^", "&", "*", "~", "?"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// var Input Criteria
var inputLength; // check
var inputOptions = [];

function getInputCriteria() {
  var inputLength = parseInt(
    prompt("Please enter the desired number of characters in your password. (between 8 and 128")
  );
  console.log("inputLength = " + inputLength);

  if (isNaN(inputLength) === true) {
    alert ("Password length must be an integer");
    return;
  }

  if (inputLength < 8) {
    alert ("Password length must be at least 8 characters long");
    return;
  }

  if (inputLength > 128) {
    alert ("Password length must be at less than 128 characters long");
    return;
  }

  // assign true/false values to var characterTypes
  var numbers = confirm("Do you want to include numbers in your password?");
  var special = confirm("Do you want to include special characters in your password?")
  var lowercase = confirm("Do you want to include lowercase letters in your password?")
  var uppercase = confirm("Do you want to include uppercase letters in your password?")

  // make sure at least one type of character is selected
  if (
    numbers === false &&
    special === false &&
    lowercase === false &&
    uppercase === false
  ) {
    alert("Password must contain at least one character type.");
    return;
  }

  // store and log input options
  inputOptions = {
    numbers: numbers,
    special: special,
    lowercase: lowercase,
    uppercase: uppercase,
    inputLength: inputLength
  };
  console.log(inputOptions);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);