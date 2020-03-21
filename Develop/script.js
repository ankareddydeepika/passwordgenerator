
var generateBtn = document.querySelector("#generate");
var selectedPasswordlength = 8;
var isUserSeletedLowerCase = false;
var isUserSelectingUpperCase = false;
var isUserslectingNumber = false;
var isUserSelctingSpecial = false;
var finalPassword = "";

function writePassword() {
  lengthOfpassword();
  allChars();
  randompasswordgenerator();

  var passwordText = document.querySelector("#password");

passwordText.value = finalPassword;
finalPassword = ""

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
  isUserSeletedLowerCase = lc;
  return lc;

}

function uppercaseChar() {

  var uc = confirm("Would you like a Uppercase letter in your password");
  isUserSelectingUpperCase = uc;

  return uc;
}

function numeric() {

  var nu = confirm("Would you like a numeric letter in your password");

  isUserslectingNumber = nu;

  return nu;
}

function specialChar() {

  var spC = confirm("Would you like a special Charecter in your password");
  isUserSelctingSpecial = spC;

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

function randompasswordgenerator(){
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var special = ["!","#","$","%","&"];

var allPasswordset = [];


if(isUserSeletedLowerCase === true){
   
  allPasswordset = allPasswordset.concat(lowercase);

}

if(isUserSelectingUpperCase === true){

  allPasswordset = allPasswordset.concat(uppercase);

}
if(isUserslectingNumber === true){

  allPasswordset = allPasswordset.concat(numbers);
}
if(isUserSelctingSpecial === true){

  allPasswordset = allPasswordset.concat(special);
}
for(i=0; i<selectedPasswordlength; i++){
 var l = Math.floor(Math.random()*allPasswordset.length); 
 var j = allPasswordset[l];
 finalPassword = finalPassword.concat(j);

}

}

generateBtn.addEventListener("click", writePassword);


