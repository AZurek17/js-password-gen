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
  var passwordLength = prompt("How many charaters long? Pick a number between " + minLength + ", and " + maxLength); 
// if charaters under 8 and over 128 characters, then invalid response
     if (passwordLength < minLength || passwordLength > maxLength) { 
      alert("Pick a number between  " + minLength + " - " + maxLength);
      generatePassword();
     }
     else {
     var lowerCase = confirm("Do you want to use lowercase characters? OK = YES, Cancel = NO");
     console.log(lowerCase);
     var upperCase = confirm("Do you want to use uppercase characters? OK = YES Cancel = NO");
     console.log(upperCase);
     var numCase = confirm("Do you want to use numeric characters? OK = YES Cancel = NO");
     console.log(numCase);
     var specialCase = confirm("Do you want to use special characters? OK = YES Cancel = NO");
     console.log(specialCase);
     charCase();

    function charCase() {
      if(lowerCase == upperCase == numCase == specialCase) {
        alert("YOU MUST CHOOSE AT LEAST ONE CHARACTER TYPE!!!!!");
        alert("Lets try again");
        generatePassword();
         }
        }
     
    }
  }


  function randomPassword() {
      
    lowerstr ["abcdefghijklmnopqustuvwxyz"] = Math.floor(Math.random()*35);
    console.log(lowerCaseChar(35));
    Upperstr ["ABCDEFGHIJKLMNOPQURSTVWYZ"] = Math.floor(Math.random()*35);
    console.log(lowerCaseChar(35));
    numstr [numCaseaseChar] = Math.floor(Math.random()*35);
    console.log(lowerCaseChar(35));
    specialstr [specialCaseCaseChar] = Math.floor(Math.random()*35);
    console.log(lowerCaseChar(35));
  }
    //  if (charSelc = false){
    //     charSelc()


      
      
      
      
      //lowerCase===false || upperCase===false || numCase === false || specialCase === false) {
      
      //
      //generatePassword();
    
  

      // else { 
      //   var lowerCase = confirm("Do you want to use lowercase characters?")
      //   var upperCase = confirm("Do you want to use uppercase characters?");
      //   var numCase = confirm("Do you want to use numeric characters?");
      //   var specialCase = confirm("Do you want to use special characters?");
      // }

                
      
       

 generatePassword() 
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
    //for (var 1 =0; i<passwordLength; i++) {

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
