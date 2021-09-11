  // // Assignment Code
  var generateBtn = document.querySelector("#generate");

  // // Write password to the #password input
 function writePassword() 
 {
  //User input
    var charNum = prompt("Choose your desired password length (Must be between 8 and 128 characters)");
    var upperLower = prompt("If you would like your password to include uppercase letters enter 'U'.  If you would like it to include lower case letters only enter 'L'.  If you would like it to include both enter 'B'.");
    var num = prompt("Would you like your password to include numbers as well as letters?  If so, enter 'Y', if not, enter 'N'");
    var spec = prompt("Would you like your password to include special characters?  If so, enter 'Y', if not, enter 'N'");
  //Makes all user input lower-case
    upperLower = upperLower.toLowerCase();
    num = num.toLowerCase();
    spec = spec.toLowerCase();
  //Outputs values for debugging
    console.log("upperLower " + upperLower);
    console.log("num " + num);
    console.log("special " + spec);
  //Baseline strings
    const lc_alphabet = "abcdefghijklmnopqrstuvwxyz";
    const special = "!#$%&'()*+,-./:;<=>?@[']^_`{|}";
    const uc_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";

    random_lc = lc_alphabet[Math.floor(Math.random()*lc_alphabet.length)];
    random_uc = uc_alphabet[Math.floor(Math.random()*uc_alphabet.length)];
    var passstring;
  //Which string that is used for selecting is conditional on the user inputs.

    if(upperLower=='l' && num=='n' && spec=='n') //If lowercase only is selected.
    {
      passstring=lc_alphabet;
    }

    else if(upperLower=='l' && num=='y' && spec=='n') //If lower case and numbers are only selected.
    {
      passstring=lc_alphabet.concat(numbers);
    }

    else if(upperLower=='l' && num=='n' && spec=='y') //If lower case and special characters are only selected.
    {
      passstring=lc_alphabet.concat(special);
    }

    else if(upperLower=='l' && num=='y' && spec=='y') //If lower case, numbers and special characters are selected.
    {
      passstring=lc_alphabet.concat(numbers, special);
    }

    else if(upperLower=='u' && num=='n' && spec=='n')  //If uppercase only is selected.
    {
      passstring=uc_alphabet;
    }
  
    else if(upperLower=='u' && num=='y' && spec=='n')  //If uppercase and numbers are only selected.
    {
      passstring=uc_alphabet.concat(numbers);
    }

    else if(upperLower=='u' && num=='n' && spec=='y')  //If uppercase and special characters are only selected.
    {
      passstring=uc_alphabet.concat(special);
    }

    else if(upperLower=='u' && num=='y' && spec=='y')  //If uppercase, numbers, and special characters are sleected.
    {
      passstring=uc_alphabet.concat(special, numbers);
    }

    else if(upperLower=='b' && num=='n' && spec=='n') //If both uppercase and lowercase are selected.
    {
      passstring=uc_alphabet.concat(lc_alphabet);
    }

    else if(upperLower=='b' && num=='y' && spec=='n') //If both uppercase and lowercase and numbers are selected.
    {
      passstring=uc_alphabet.concat(lc_alphabet, numbers);
    }

    else if(upperLower=='b' && num=='n' && spec=='y') //If both uppercase and lowercase and special characters are selected.
    {
      passstring=uc_alphabet.concat(lc_alphabet, special);
    }

    else if(upperLower=='b' && num=='y' && spec=='y') //If both uppercase and lowercase, numbers and special characters are selected.
    {
      passstring=uc_alphabet.concat(lc_alphabet, special, numbers);
    }

  console.log(passstring);
  
  //Eat iteration of the loop adds a random character from the string determined above.  The loops runs the number of times indicated by the number of characters in the password. 
  var password="";
  for(i=0; i<charNum; i++)
    {
      randomindex=Math.floor((Math.random()*passstring.length)); //Gets a random index to pick from the pre-determined string
      password = password.concat(passstring[randomindex]); //concatonates the new random character to the original string
      }
      console.log(password);
      console.log(password.length)
      return password;
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
