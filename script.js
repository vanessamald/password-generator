const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

// password prompt 
const passwordPrompt = () => {
var welcome = window.prompt("Welcome to the password generator! Please enter your name.");

var passwordLength = window.prompt("Enter password length: (8-100)");
if (passwordLength < 8 || passwordLength > 128){
    alert("Length must be 8-128 characters")
}
// prompt user to select password criteria
var lowerUppercase = window.prompt("Include lowercase letters? (yes/no)");
// alert user that password criteria is invalid
if (lowerUppercase !== "yes" && lowerUppercase !== "Yes" && lowerUppercase !== "no" && lowerUppercase !== "No" && lowerUppercase !== "NO" && lowerUppercase !== "YES"){
    alert("Please enter yes or no")
} while (lowerUppercase !== "yes" && lowerUppercase !== "Yes" && lowerUppercase !== "no" && lowerUppercase !== "No" && lowerUppercase !== "NO" && lowerUppercase !== "YES"){
    lowerUppercase = window.prompt("Include lowercase letters? (yes/no)");
}
var includeNumbers = window.prompt("Include numbers? (yes/no)");
if (includeNumbers !== "yes" && includeNumbers !== "Yes" && includeNumbers !== "no" && includeNumbers !== "No" && includeNumbers !== "NO" && includeNumbers !== "YES"){
    alert("Please enter yes or no")
    
} while (includeNumbers !== "yes" && includeNumbers !== "Yes" && includeNumbers !== "no" && includeNumbers !== "No" && includeNumbers !== "NO" && includeNumbers !== "YES"){
    includeNumbers = window.prompt("Include numbers? (yes/no)");
}
var specialCharacters = window.prompt("Include special characters? (yes/no)");
if (specialCharacters !== "yes" && specialCharacters !== "Yes" && specialCharacters !== "no" && specialCharacters !== "No" && specialCharacters !== "NO" && specialCharacters !== "YES"){
    alert("Please enter yes or no")
    
} while (specialCharacters !== "yes" && specialCharacters !== "Yes" && specialCharacters !== "no" && specialCharacters !== "No" && specialCharacters !== "NO" && specialCharacters !== "YES"){
    specialCharacters = window.prompt("Include special characters? (yes/no)");
}

// store user input in variables
var length = passwordLength;
console.log(length);
var letters = lowerUppercase.toLowerCase();
console.log(letters);
var numericValues = includeNumbers.toLowerCase();
console.log(numericValues);
var char = specialCharacters.toLowerCase();
console.log(char);

// after prompt call the password function
window.addEventListener('load', function() {
    generatePassword();
  });

// generate password function
var generatePassword = function() {
    var length= passwordLength;
    var password = "" ;
    var allowed = passwordLength;

// add password criteria to password
for (var i = 0; i < length; i++) {
        if (lowerUppercase == "yes") {
            password += alpha.charAt(Math.floor(Math.random() * alpha.length));
        }
        if (includeNumbers == "yes"){
            password += (Math.floor(Math.random()* numbers.length));
        }
        if (specialCharacters == "yes"){
            password += symbols.charAt(Math.floor(Math.random() * symbols.length));
        }

        if (allowed > 0) {
            password += alpha.charAt(Math.floor(Math.random() * alpha.length));
        }
        if (i == length + 1) {break}
        //console.log(password);
   
        // generate new password and add password + name to text field
        var newPassword = password.slice(-allowed);
        document.getElementById("password").innerHTML = newPassword;
        document.getElementById("name").innerHTML = welcome.toUpperCase() + "'s password is: ";
        console.log(newPassword);
        } 
    };
}

// function to copy password to clipboard 
// get password from text field
function copy() {
    let element = document.getElementById("password");
    let elementText = element.innerText;
    copyText(elementText);
}

// copy password to clipboard
function copyText(text) {
    navigator.clipboard.writeText(text);
    copyAlert();   
}

// alert when password is copied to clipboard
function copyAlert() {
    let div = document.getElementById("alert");
    let p = document.createElement("p");
    p.innerText = "Password copied to clipboard!";
    div.append(p); 

    setTimeout(function(){
        p.remove();
    }
    , 10000);
 }

passwordPrompt();