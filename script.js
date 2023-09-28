// Assignment code here


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

//Psuedocode
// create function - generatePassword
var minLength = 8;
var maxLength = 128;

function generatePassword() {
  var passwordLength = prompt("Pick a number between " + minLength + ", and " + maxLength); 
// if charaters under 8 and over 128 characters, then invalid response
     if (passwordLength < minLength || passwordLength > maxLength) { 
      confirm("Pick a number between  " + minLength + " - " + maxLength);
     // generatePassword();
    }
      else { 
      var lowerCase = confirm("Do you want to use lowercase characters?");
      var upperCase = confirm("Do you want to use uppercase characters?");
      var numCase = confirm("Do you want to use numbers characters?");
      var specialCase = confirm("Do you want to use special characters?");
      }

      if (!lowerCase && !upperCase && !numCase && !specialCase); {
      alert("You must chose one charcter type");
      alert("Let's start over");
      generatePassword();
      }
    }

      var lowerCaseChar = ("abcdefghijklmnopqustuvwxyz");
      var upperCaseChar = ("ABCDEFGHIJKLMNOPQURSTVWYZ");
      var numCaseCha = ("0123456789");
      var specialCaseCha = ("!@#$%^&*()_+");
     
      
     
    

   
// prompt user with a questions about password charcters and store respones in variables
    
 
  
generatePassword()
  

// if user does not choose "ok" on all, alert "must choose at least one"
// store respones in variables
// store uppercase letters in a variable - array
// store lowercase letters in a variable - array
// store numbers in a variable - array
// store special characters in a variable -  array
// declare an empty string
// combine predefined stored values that can be in the password in a string
// create a for loop, with users charater amount as the number of max characters select the loop wiill execute
// in the loop push the string[random index] into empty array
// once loop is completed, creaete string from the array
// return password string


//console.log(Math.floor(Math.random() * 8 /* Charactervalue// */)