// var inputCriteria
var numbers = ["1", "2", "3" , "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "@", "#","$", "%", "^", "&", "*", "~", "?"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// var Input Criteria
var inputLength; // check

var inputNumbers;
var inputSpecial;
var inputLowercase;
var inputUppercase;

var inputCriteria = [];

function generatePassword() {
  var inputLength = parseInt(
    prompt("Please enter the desired number of characters in your password. (between 8 and 128)")
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

  // assign true/false values to var inputCriteria
  var inputNumbers = confirm("Do you want to include numbers in your password?");
  var inputSpecial = confirm("Do you want to include special characters in your password?")
  var inputLowercase = confirm("Do you want to include lowercase letters in your password?")
  var inputUppercase = confirm("Do you want to include uppercase letters in your password?")

  // make sure at least one type of character is selected
  if (
    inputNumbers === false &&
    inputSpecial === false &&
    inputLowercase === false &&
    inputUppercase === false
  ) {
    alert("Password must contain at least one character type.");
    return generatePassword;
  }

  //If characters selected
  if (inputNumbers) {
    inputCriteria = inputCriteria.concat(numbers);
  }
  if (inputSpecial) {
    inputCriteria = inputCriteria.concat(special);
  }
  if (inputLowercase) {
    inputCriteria = inputCriteria.concat(lowercase);
  }
  if (inputUppercase) {
    inputCriteria = inputCriteria.concat(uppercase);
  }

  // generate password with random array
  var randomPassword = "";
  for (i = 0; i < inputLength; i++) {
    randomPassword = randomPassword + inputCriteria[Math.floor(Math.random() * inputCriteria.length)];
  }

  return randomPassword;
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