// Assignment code here
// create function to easily call
function generateBool()
{
  return (Math.floor(Math.random() * 3/2));
}

function generatelength()
{
  let min = 8;
  let max = 129;
  let passwordLength = Math.floor(Math.random() * (max - min) + min);
  return passwordLength;
}

function findRange(min, max)
{
  return String.fromCharCode(Math.floor(Math.random() * (max - min) + min));
}

function randomNum(theTempPass)
{
  // let num = 0;
  while(true)
  {
    let num = Math.floor(Math.random()*4);
    console.log("The random number switch case is: " + num);
    if(theTempPass.lowercase == 1 && num === 0)
      return 0;
    // else
    //   num = 1;
    if(theTempPass.uppercase == 1 && num === 1)
      return 1;
    // else
    //   num = 2;
    if(theTempPass.numeric == 1 && num === 2)
      return 2;
    // else
    //   num = 3;
    if(theTempPass.specialChar == 1 && num === 3)
      return 3;
    // else
    //   return 0;
  }
}

// function generatePassword()
// {
//   var tempPass = {
//     passLength : 0,
//     lowercase : 0,
//     uppercase : 0,
//     numeric : 0,
//     specialChar : 0
//   };
//   let password = "";
//   tempPass.passLength = generatelength();
//   tempPass.lowercase = generateBool();
//   tempPass.uppercase = generateBool();
//   tempPass.numeric = generateBool();
//   tempPass.specialChar = generateBool();
//   if(tempPass.lowercase === 0 && (tempPass.uppercase === 0 && tempPass.numeric === 0))
//     tempPass.specialChar = 1;
//   let char;
//   for(let i = 0; i < tempPass.passLength; i++)
//   {
//     switch(randomNum(tempPass))
//     {
//       case 0:
//           char = findRange(97, 123);
//           password+=char;
//         break;
//       case 1:
//           char = findRange(65, 91);
//           password+=char;
//         break;
//       case 2:
//           char = findRange(48, 58);
//           password+=char;
//         break;
//       case 3:
//           char = findRange(33, 48);
//           password+=char;
//         break;
//       default:
//         break;
//     }
//   }
//   return password;
// }

function generatePassword()
{
  var tempPass = {
    passLength : 0,
    lowercase : 0,
    uppercase : 0,
    numeric : 0,
    specialChar : 0
  };
  let password = "";
  let i = true;
  while(i)
  {
    tempPass.passLength = prompt("Enter in the number of how long you want the password to be, must be a number between 8-128: ");
    let value = parseInt(tempPass.passLength);
    if(value >= 8 && value <= 128)
      i = false;
  }
  
  tempPass.lowercase = prompt("Enter 1 for yes/Type 0 for no lowercase letters to be included in the password: ");
  tempPass.uppercase = prompt("Enter 1 for yes/Type 0 for no uppercase letters to be included in the password: ");
  tempPass.numeric = prompt("Enter 1 for yes/Type 0 for no numbers to be included in the password: ");
  tempPass.specialChar = prompt("Enter 1 for yes/Type 0 for no special characters to be included in the password: ");
  if(tempPass.lowercase == 0 && (tempPass.uppercase == 0 && tempPass.numeric == 0))
    tempPass.specialChar = 1;
  for(let i = 0; i < tempPass.passLength; i++)
  {
    switch(randomNum(tempPass))
    {
      case 0:
        char = findRange(97, 123);
        password+=char;
        break;
      case 1:
        char = findRange(65, 91);
        password+=char;
        break;
      case 2:
        char = findRange(48, 58);
        password+=char;
        break;
      case 3:
        char = findRange(33, 48);
        password+=char;
        break;
      default:
        break;
    }
  }
  return password;
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
