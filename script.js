// Assignment Code.
var generateBtn = document.querySelector("#generate");
// console.log(generateBtn);

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
var numbers = "0123456789";


// Write password to the #password input.
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var generatePassword = function () {
    var passLength = parseInt(window.prompt("How many characters would you like your password to contain?"));
    console.log(passLength);

    if (passLength < 8) {
        window.alert("Password length must be at least 8 characters.");
        return;
    } else if (passLength > 128) {
        window.alert("Password length must be less than 129 characters.");
        return;
    }

    var acceptableChars = "";
    var passSpecChars = window.confirm("Click Ok to confirm to include special characters.");
    if (passSpecChars) {
        acceptableChars += specialCharacters
    };
    var passNumChars = window.confirm("Click Ok to confirm to include numeric characters.");
    if (passNumChars) {
        acceptableChars += numbers
    };
    var passLowChars = window.confirm("Click Ok to confirm to include lowercase characters.");
    if (passLowChars) {
        acceptableChars += lowercase
    };
    var passUpChars = window.confirm("Click Ok to confirm to include uppercase characters.");
    if (passUpChars) {
        acceptableChars += uppercase
    };
    console.log(acceptableChars);

    var passwd = "";
    for (i = 0; i < passLength; i++) {
        console.log(passwd);
        passwd += acceptableChars.charAt(Math.floor(Math.random() * acceptableChars.length));
    };


    return passwd;

}

