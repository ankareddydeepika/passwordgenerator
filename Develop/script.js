// Assignment Code
var generateBtn = document.querySelector("#generate");
var selectedPasswordlength = 8;
// Write password to the #password input
function writePassword() {
  lengthOfpassword();
  allChars();

}
function lengthOfpassword() {

  var lengthEl = prompt("Choose length of the Password, Please choose between 8 to 128 Characters");
  if (lengthEl >= 8 && lengthEl <= 128) {

    selectedPasswordlength = lengthEl;

    return true;
  }
  else {
    alert("Enter Valid length");

    var lengthEl2 = confirm("Would you like to enter different length");

    if (lengthEl2 === true) {

      lengthOfpassword();
    }

    return false;
  }

}

function lowercaseChar() {

  var lc = confirm("Would you like a Lowercase letter in your password");

  return lc;

}

function uppercaseChar() {

  var uc = confirm("Would you like a Uppercase letter in your password");

  return uc;
}

function numeric() {

  var nu = confirm("Would you like a numeric letter in your password");

  return nu;
}

function specialChar() {

  var spC = confirm("Would you like a special Charecter in your password");

  return spC;


}

function allChars() {
  var a = lowercaseChar();
  var b = uppercaseChar();
  var c = numeric();
  var d = specialChar();

  if (a === true || b === true || c === true || d === true) {

    return;

  }

  else {
    alert("Choose atleast one of these Characters : lowercase, uppercase, numeric, special charecter");
    allChars();
  }
}




// var password = generatePassword();
// var passwordText = document.querySelector("#password");

// passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


