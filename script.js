// // Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  //User input
  var charNum = prompt("Choose your desired password length (Must be between 8 and 128 characters)");
  if (charNum < 8 || charNum > 128) {
    alert("Please pick a number between 8 and 128.")
    return;
  }

  var upperLower = prompt("If you would like your password to include uppercase letters enter 'U'.  If you would like it to include lower case letters only enter 'L'.  If you would like it to include both enter 'B'.");
  upperLower = upperLower.toLowerCase();
  if ((upperLower !== "u") && (upperLower !== "l") && (upperLower !== 'b')) {
    alert("Please pick either U, L, or B.")
    return;
  }
 

  var num = prompt("Would you like your password to include numbers as well as letters?  If so, enter 'Y', if not, enter 'N'");
  num = num.toLowerCase();
  if (num !== 'y' && num !== 'n') {
    alert("Please pick either n or y.")
    return;
  }

  var spec = prompt("Would you like your password to include special characters?  If so, enter 'Y', if not, enter 'N'");
  spec = spec.toLowerCase();
  if (spec!=='n' && spec!=='y') {
    alert("Please pick either y or n.")
    return;
  }

  //Outputs values for debugging
  //console.log("upperLower " + upperLower);
  //console.log("num " + num);
  //console.log("special " + spec);

  //Baseline strings
  const lc_alphabet = "abcdefghijklmnopqrstuvwxyz";
  const special = "!#$%&'()*+,-./:;<=>?@[']^_`{|}";
  const uc_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";

  random_lc = lc_alphabet[Math.floor(Math.random() * lc_alphabet.length)];
  random_uc = uc_alphabet[Math.floor(Math.random() * uc_alphabet.length)];
  var passstring;
//Which string that is used for selecting is conditional on the user inputs.

//If lowercase only is selected.
  if (upperLower == 'l' && num == 'n' && spec == 'n')
  {
    passstring = lc_alphabet;
  }

//If lower case and numbers are only selected.
  else if (upperLower == 'l' && num == 'y' && spec == 'n') {
    passstring = lc_alphabet.concat(numbers);
  }

//If lower case and special characters are only selected.
  else if (upperLower == 'l' && num == 'n' && spec == 'y') {
    passstring = lc_alphabet.concat(special);
  }

//If lower case, numbers and special characters are selected.
  else if (upperLower == 'l' && num == 'y' && spec == 'y') {
    passstring = lc_alphabet.concat(numbers, special);
  }

//If uppercase only is selected.
  else if (upperLower == 'u' && num == 'n' && spec == 'n') {
    passstring = uc_alphabet;
  }

//If uppercase and numbers are only selected.
  else if (upperLower == 'u' && num == 'y' && spec == 'n')  {
    passstring = uc_alphabet.concat(numbers);
  }

//If uppercase and special characters are only selected.
  else if (upperLower == 'u' && num == 'n' && spec == 'y')  {
    passstring = uc_alphabet.concat(special);
  }

//If uppercase, numbers, and special characters are sleected.
  else if (upperLower == 'u' && num == 'y' && spec == 'y')  {
    passstring = uc_alphabet.concat(special, numbers);
  }

//If both uppercase and lowercase are selected.
  else if (upperLower == 'b' && num == 'n' && spec == 'n') {
    passstring = uc_alphabet.concat(lc_alphabet);
  }

//If both uppercase and lowercase and numbers are selected.
  else if (upperLower == 'b' && num == 'y' && spec == 'n') {
    passstring = uc_alphabet.concat(lc_alphabet, numbers);
  }

//If both uppercase and lowercase and special characters are selected.
  else if (upperLower == 'b' && num == 'n' && spec == 'y'){
    passstring = uc_alphabet.concat(lc_alphabet, special);
  }

  //If both uppercase and lowercase, numbers and special characters are selected.
  else if (upperLower == 'b' && num == 'y' && spec == 'y'){
    passstring = uc_alphabet.concat(lc_alphabet, special, numbers);
  }


  //Each iteration of the loop adds a random character from the string determined above.  The loops runs the number of times indicated by the number of characters in the password. 
  var password = "";
  for (i = 0; i < charNum; i++) {
    randomindex = Math.floor((Math.random() * passstring.length)); //Gets a random index to pick from the pre-determined string
    password = password.concat(passstring[randomindex]); //concatonates the new random character to the original string
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
