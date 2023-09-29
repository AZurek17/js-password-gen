// Start of assignment code:

var minLength = 8;
var maxLength = 128;

// create function - generatePassword
function generatePassword() {
  var passwordLength = prompt("How many charaters long? Pick a number between " + minLength + ", and " + maxLength); 
// if charaters under 8 and over 128 characters, then invalid response
     if (passwordLength < minLength || passwordLength > maxLength) { 
      alert("ERROR - Pick a number between  " + minLength + " - " + maxLength);
      generatePassword();
     }
     // setting character options to true or false
     else {
     var lowerCase = confirm("Do you want to use lowercase characters? OK = YES, / Cancel = NO");
     //console.log(lowerCase);
     var upperCase = confirm("Do you want to use uppercase characters? OK = YES / Cancel = NO");
     //console.log(upperCase);
     var numCase = confirm("Do you want to use numeric characters? OK = YES / Cancel = NO");
     //console.log(numCase);
     var specialCase = confirm("Do you want to use special characters? OK = YES / Cancel = NO");
     //console.log(specialCase);
     charCase();
    // creating a strings for characters
    var lowerChar = "abcdefghijklmnopqustuvwxz";
    var upperChar = "ABCDEFGHIJKLMNOPQURSTVWYZ";
    var numChar ="1234567890";
    var specialChar ="!@#$%^&*()";

    // setting character options to true or false
    function charCase() {
    if(!lowerCase && !upperCase && !numCase && !specialCase) {
      alert("YOU MUST CHOOSE AT LEAST ONE CHARACTER TYPE!!!!!");
      alert("Lets try again");
      generatePassword();}
      }

    // created empty vars 
    var charSel = ""; 
    var trueValue = [];

    // using String Method with concat, to join two or more strings and set emtpy var charSel
    if (lowerCase) {
      charSel = charSel.concat(lowerChar); console.log();
    }
    if (upperChar) {
      charSel = charSel.concat(upperChar); console.log();
    }
    if (numChar) {
      charSel = charSel.concat(numChar); console.log();
    }
    if (specialChar) {
      charSel = charSel.concat(specialChar); console.log();
    }
    // creating for loop for string and setting empty var vauleTrue 
    for (var i =0; i < passwordLength; i++){
    trueValue.push(charSel[Math.floor(Math.random() * charSel.length)]);
    }
    // setting emty var to creating for loop for string
    password = trueValue.join ("");
    return password;
}
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}




 //randomPassword()   

/*lowerCaseChar//
    var lowerCaseChar = ["abcdefghijklmnopqustuvwxyz"];
    var upperCaseChar = ["ABCDEFGHIJKLMNOPQURSTVWYZ"];
    var numCaseChar = ["0123456789"];
    var specialCaseChar = ["!@#$%^&*()_+"];
    
    //
  
    //randomPassword()
  
      //if (isNAN(generatePassword))
      //console.log(randomPasswod(3)
      //   Math.random() .toString(2).lowerCaseChar +
      //   Math.random() .toString(2).upperCaseChar +
      //   Math.random() .toString(2).lowerCaseChar +
      //   Math.random() .toString(2).upperCaseChar);
      //   //.toUpperCase() .slice (2)
        //.toLowerCase() .slice (4);
        //.numCaseChar() .slice (0)
        //.specialCaseChar() .splice (6));
        // .upperCaseChar() .slice (4)+
        // .numCaseChar() .slice (6)+
        // .specialCaseChar() .splice (8)+;
    
     
     
  // add above later
      
    
  
  //generatePassword();
  //randomPassword();
    

    //console.log(Math.floor(Math.random() * 8 /* Charactervalue// */

    

   
// prompt user with a questions about password charcters and store respones in variables
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
