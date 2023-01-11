// Array of special characters to be included in password
var specialCharacters = 
[
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = 
[
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = 
[
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//var for prompts for each char type
var pwdlength ;
var lowercaseprompt ; 
var uppercaseprompt ;
var numberprompt ;
var specialchar ;

// Function to prompt user for password options
function getPasswordOptions() 
{
  pwdlength = prompt("What is the length of the password you want?");
 //if statement to check less than 10 (length)
 if (pwdlength < 10)
 {
  alert("The password length has to be greater than 10. Please try again!");
  console.log("The user has placed a value lower than 10");
  return;
 }
  
 else if(pwdlength > 64)
  {
    alert("The password length has to be less than 64. Please generate password again!");
    console.log("User has input a value greater than 64");
    return;
  }
 
  lowercaseprompt = confirm("Do you want a lowercase char in your password ?");
  uppercaseprompt = confirm("Do you want a uppercase char in your password ? ");
  numberprompt = confirm("Do you want a number in your password ?");
  specialchar = confirm("Do you want a special character char in your password ?");
  
  if(lowercaseprompt === false && uppercaseprompt === false && numberprompt === false && specialchar === false)
  {
    alert("YOU MUST SELECT AT LEAST 1 CHARACTER TYPE: LOWERCASE, UPPERCSASE, NUMBER OR SPECIAL CHAR TYPE");
    console.log("User has not selected any character type. Password cannot be generated. Please select at least 1 character type");
    console.log("The password needs to be secure! Please select at least 1 Char type and Try Again!");
    return;
  }


  //creating keys to be called in generate password function to validate character types of the user
  var passwordOptions = 
  {
    pwdlength: pwdlength,
    lowercaseprompt: lowercaseprompt,
    uppercaseprompt: uppercaseprompt,
    numberprompt: numberprompt,
    specialchar: specialchar
  };
  return passwordOptions;
 } 

 
// Function for getting a random element from any array
function getRandom(arr) 
{
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  console.log("Getting random characters from the array");
  return randomElement;

}

// Function to generate password with user input
function generatePassword() 
{
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if(options.lowercaseprompt)
  {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters))
    
  }

  if(options.uppercaseprompt)
  {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
    
  }

  if(options.numberprompt)
  {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numberprompt));
    
  }

  if(options.specialchar)
  {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialchar));
    
  }

   //write for loop to based on the user input from each array
    for (let index = 0; index < options.pwdlength; index++) 
    {
      var possibleCharacter = getRandom(possibleCharacters);
      result.push(possibleCharacter);
    }

    for (let index = 0; index < guaranteedCharacters.length; index++) 
    {
      result[index] = guaranteedCharacters[index];
      return result.join("");
    }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() 
{
  var password = generatePassword();

  var passwordText = document.querySelector('#password');
  passwordText.value = password;

  console.log('Password generated')
  console.log('Your password is '+password.length + ' characters long.')
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);