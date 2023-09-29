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
      generatePassword();
      }
    }

    // created empty vars 
    var charSel = ""; 
    var passValue = [];

    // using String Method with concat, to join two or more strings and set emtpy var charSel
    if (lowerCase) {
      charSel = charSel.concat(lowerChar); console.log();
    }
    if (upperCase) {
      charSel = charSel.concat(upperChar); console.log();
    }
    if (numCase) {
      charSel = charSel.concat(numChar); console.log();
    }
    if (specialCase) {
      charSel = charSel.concat(specialChar); console.log();
    }
    // creating for loop for string and setting empty var vauleTrue 
    for (var i =0; i < passwordLength; i++){
    passValue.push(charSel[Math.floor(Math.random() * charSel.length)]);
    }
    // setting emty var to creating for loop for string
    password = passValue.join ("");
    return password;
}
}
// [lowerChar]Math.floor(math.random)(8)

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
