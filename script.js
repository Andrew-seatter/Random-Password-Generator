// base algoritihim for generating a password
function generatePassword() {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789@#$';
        var numberChoice = window.prompt("Choose a password length between 8-128 characters");

        console.log(numberChoice);

    if(numberChoice < 8 && numberChoice > 128){
        pass = 'Error: password needs to be between 8-128 characters'
        
    } else if (numberChoice >= 8 && numberChoice <= 128) {
    
    for (let i = 1; i <= numberChoice; i++) {
        let char = Math.floor(Math.random()
            * str.length + 1);
 
        pass += str.charAt(char)
    }
 
    return pass;
    }
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