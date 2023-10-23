// base algoritihim for generating a password
function generatePassword() {
    
    // section for different arrays
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyz';
    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let num = '0123456789';
    let symbol = '@#$';
    var arrayCounter = '';


        // function that sorts the arrays and prints the array counter which by the end will be a combination of all the arrays depending on the user choices
        function writeAll() { 
            for (let i = 1; i <= numberChoice; i++) {
                let char = Math.floor(Math.random()
                    * arrayCounter.length + 1);
         
                pass += arrayCounter.charAt(char);
            }
        }

        //alert windows and variables for their answers, deided to just use array concat for it and seperate the arrays
        //rather than write a ton of conditionals trying to map out different answer possibilites
        var numberChoice = window.prompt("Choose a password length between 8-128 characters");
        console.log(numberChoice);
        
        var lowerCaseChoice = window.prompt('Would you like your password to have lowercase characters');
        lowerCaseChoice.toLowerCase;
        if (lowerCaseChoice === 'yes') {
            arrayCounter = arrayCounter.concat(str);
            console.log(arrayCounter);
        }

        var upperCaseChoice = window.prompt('Would you like your password to have upper case characters');
        upperCaseChoice.toLowerCase;
        if(upperCaseChoice === 'yes'){
            arrayCounter = arrayCounter.concat(upperCase);
            console.log(arrayCounter);
        }

        var numericalChoice = window.prompt('Would you like your password to include numbers');
        numericalChoice.toLowerCase;
        if (numericalChoice === 'yes'){
            arrayCounter = arrayCounter.concat(num);
            console.log(arrayCounter);
        }

        var symbolChoice = window.prompt('Would you like your password to have symbols');
        symbolChoice.toLowerCase;
        if (symbolChoice === 'yes'){
            arrayCounter = arrayCounter.concat(symbol);
            console.log(arrayCounter);
        }


       //conditional for the length of the password
    if(numberChoice < 8 || numberChoice > 128){
        pass += 'Error: Sorry the password has to be between 8-128 characters';
        return pass;
        
    } else {
        writeAll();
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