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
  var passwordLength = prompt("Pick a number between " + minLength + ", and " + maxLength + " characters"); 
     if (passwordLength < minLength || passwordLength > maxLength) {
      confirm("Pick a number between  " + minLength + " - " + maxLength);
      generatePassword();
     }  
     
    else {
    var lowerCase = confirm("Do you want to use lowercase characters?");
    var upperCase = confirm("Do you want to use uppercase characters?");
    var numCase = confirm("Do you want to use numbers characters?");
    var specialCase = confirm("Do you want to use special characters?");
     }
}  

  // prompt; {
  //         passwordLength >= minLength && passwordLength <= maxLength; 

  //         if passwordLength = function (num) {
  //           return
  //         } 
  //         alert("Needs to be between  " + minLength + " - " + maxLength); 
  //         }
  //       }
  //   prompt("Do you want to use uppercase characters? YES, click OK, NO, click Cancel");
            
     
   
          
          
        
    
      
  
     // if (userInput !== (maxLength)); {
     //   prompt("too many characters, 128 characters max");
     // }
    

generatePassword()  
  // (confirm (passwordLength < 8));
  //  lowerCase = prompt("Do you want to use lowercase characters? YES, click OK, NO, click Cancel");
  //   If 
  //  upperCase = prompt("Do you want to use uppercase characters? YES, click OK, NO, click Cancel");
  
  //  
  //  ;
  //  prompt("How many characters do you want. Must be a minimum of 8 characters, and max 128 characters");
  
  //  return
  
  //    if (userImput !== minlength); {
        
  //       return false
  //    if (userImput >= maxLength);  
        
      
  //  }
   

   //     return 
    //     } else {
    //       prompt( )
  
    //     }
    // }
  
// prompt user with a questions of how many charcters
// if charaters under 8 and over 128 characters, then invalid response
// confirm whether user wants uppercase letters in password
// confirm whether user wants lower letters in password
// confirm whether user wants special letters in password
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


//console.log(Math.floor(Math.random() * 8 /* Charactervalue// */))