const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

var passwordLength = window.prompt("Enter password length: (8-100)");

if (passwordLength < 8 || passwordLength > 128){
    alert("Length must be 8-128 characters")
}

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

/*
var passwordPrompt = function() {
    var passwordLength = window.prompt("Enter password length: (8-100)");
    if (passwordLength < 8 || passwordLength > 128){
        console.log(passwordLength);
        alphaPrompt();
        return true
} else {
    window.alert("You need to provide a valid answer! Please try again.");
    return false
}
};

var alphaPrompt = function() {
    var lowerUppercase = window.prompt("Include lowercase and uppercase letters? (yes/no)")
    if (lowerUppercase == "yes" || lowerUppercase == "Yes" || lowerUppercase == "YES") {
        numbersPrompt();
        return true
    } else {
        return false
    }
};

var numbersPrompt = function() {
    var includeNumbers = window.prompt("Include nummeric values: (yes/no)")
    if (includeNumbers == "yes") {
        specialCharactersPrompt();
        return true
    } else {
        return false
    }
};

var specialCharactersPrompt = function() {
    var specialCharacters = window.prompt("Include special characters: yes/no")
    if (specialCharacters == "yes") {
        generatePassword();
        return true
    } else {
        return false
    }
};
*/

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
            //allowed--;
            //console.log(allowed--);
            console.log(password);
        }
        if (includeNumbers == "yes" || includeNumbers == "Yes" || includeNumbers == "YES") {
            password += (Math.floor(Math.random()* numbers.length));
            //allowed--;
            //console.log(allowed--);
            console.log(password);
        }
        if (specialCharacters == "yes" || specialCharacters == "Yes" || specialCharacters == "YES") {
            password += symbols.charAt(Math.floor(Math.random() * symbols.length));
            //allowed--;
            console.log(password);
        }

        if (allowed > 0) {
            password += alpha.charAt(Math.floor(Math.random() * alpha.length));
            //allowed--;
            console.log(password);
        }
        if (i == length + 1) {break}
        console.log(password);


        /*
            if (lowerUppercase == "yes") password += alpha.charAt(Math.floor(Math.random() * alpha.length));
            
            if (includeNumbers == "yes") password += (Math.floor(Math.random()* numbers * numbers ));

            if (specialCharacters == "yes") password += symbols.charAt(Math.floor(Math.random() * symbols.length));
            const newPassword = password;
            */
            //password += allowed[random];
        //console.log(random);

   // if (lowerUppercase == "yes") password += alpha.charAt(Math.floor(Math.random() * alpha.length)); //lowerUppercase = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
   // if (includeNumbers == "yes") password += (Math.floor(Math.random()* numbers * numbers ));// = "1234567890");
    //if (specialCharacters == "yes") password += symbols.charAt(Math.floor(Math.random() * symbols.length));//(allowed.specialCharacters = "!@#$%^&*_-+=");
   //const lowercase = alpha.charAt(Math.floor(Math.random() * alpha.length));
   //const addNumbers = numbers.charAt(Math.floor(Math.random() * numbers.length));
   //const addSymbols = symbols.charAt(Math.floor(Math.random() * symbols.length));

   

    //} 
    console.log(allowed);
    //const newPassword = password.split(allowed).sort(function() {
       // const newPassword = (lowercase.concat(addNumbers, addSymbols))
    //console.log(newPassword);
    const newPassword = password.slice(-allowed);
    document.getElementById("password").innerHTML = newPassword;
        //);
    console.log(newPassword);
        }
    //return password;
  
};



//passwordPrompt();
