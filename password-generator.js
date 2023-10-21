
var generatePassword = require('generate-password');

// Function to generate a random password
var generateRandomPassword = function() {
  // Password options
  var passwordOptions = {
    length: 12,            // Length of the password
    numbers: true,         // Include numbers
    symbols: true,         // Include special symbols
    uppercase: true,       // Include uppercase letters
    excludeSimilarCharacters: true,
    strict: true
  };

  // Generate a random password
  
  var password = generatePassword.generate(passwordOptions);

  return password;
};

// Call the function and log the generated password
var generatedPassword = generateRandomPassword();
console.log('Generated Password:', generatedPassword);
