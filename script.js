const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";


// get name from text field
var welcome = window.prompt("Welcome to the password generator! Please enter your name.");
// get password length from text field
var passwordLength = window.prompt("Enter password length: (8-100)");
// alert user that password length is invalid
if (passwordLength < 8 || passwordLength > 128){
    alert("Length must be 8-128 characters")
}
// continue prompts 
if (passwordLength >= 8 && passwordLength <= 128){
var lowerUppercase = window.prompt("Include lowercase and uppercase letters? (yes/no)")
var includeNumbers = window.prompt("Include nummeric values: (yes/no)")
var specialCharacters = window.prompt("Include special characters: yes/no")
}


var length = passwordLength;
console.log(length);
var letters = lowerUppercase;
console.log(letters);
var numericValues = includeNumbers;
console.log(numericValues);
var char = specialCharacters;
console.log(char);


window.addEventListener('load', function() {
    generatePassword();
  });

var generatePassword = function() {
    var length= passwordLength;
    var password = "" ;
    var allowed = passwordLength;

for (var i = 0; i < length; i++) {
        
        if (lowerUppercase == "yes" || lowerUppercase == "Yes" || lowerUppercase == "YES") {
            password += alpha.charAt(Math.floor(Math.random() * alpha.length));
        }
        if (includeNumbers == "yes" || includeNumbers == "Yes" || includeNumbers == "YES") {
            password += (Math.floor(Math.random()* numbers.length));
        }
        if (specialCharacters == "yes" || specialCharacters == "Yes" || specialCharacters == "YES") {
            password += symbols.charAt(Math.floor(Math.random() * symbols.length));
        }

        if (allowed > 0) {
            password += alpha.charAt(Math.floor(Math.random() * alpha.length));
        }
        if (i == length + 1) {break}
        console.log(password);
   
   // generate new password 
    var newPassword = password.slice(-allowed);
    document.getElementById("password").innerHTML = newPassword;
    document.getElementById("name").innerHTML = welcome + "'s password is: ";
    console.log(newPassword);
        } 
};

// get password from text field
function copy() {
    let element = document.getElementById("password");
    let elementText = element.innerText;
    copyText(elementText);
}

// copy password to clipboard
function copyText(text) {
    navigator.clipboard.writeText(text);
    //alert("Password copied to clipboard!");
    copyAlert();   
}

// alert when password is copied to clipboard
function copyAlert() {
    let div = document.getElementById("alert");
    let p = document.createElement("p");
    p.innerText = "Password copied to clipboard!";
    div.append(p); 
 }

//passwordPrompt();
