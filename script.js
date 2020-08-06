// Assignment Code
var generateBtn = document.querySelector("#generate");

// Below: line 6 is whats is calling my function (invoking my function)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//line 16 is generating the definition of my function 
function generatePassword() {
  var arrayAllCaps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  var arrayLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  var arrayNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  var arraySpecialCharcters = ['!', '@', '#', '$', '%', '&']
  var allArrays = []
  var result = ''

  var allCapsCheckbox = document.querySelector('#allCaps')
  console.log(allCapsCheckbox.checked)
  if (allCapsCheckbox.checked) {
    //allArrays = allArrays.concat(arrayAllCaps)
    allArrays.push(...arrayAllCaps)
  }
  var allLowerCaseCheckbox = document.querySelector('#lowerCaps')
  if (allLowerCaseCheckbox.checked) {
    allArrays.push(...arrayLowerCase)
  }
  var allNumbersCheckbox = document.querySelector('#numbers')
  if (allNumbersCheckbox.checked) {
    allArrays.push(...arrayNumbers)
  }
  var allSpecialCharacters = document.querySelector('#specialCharacters')
  if (allSpecialCharacters.checked) {
    allArrays.push(...arraySpecialCharcters)
  }
  if (allArrays.length > 0) {
    var $inputlength = document.querySelector('#length')
    console.log($inputlength.value)
    for (i = 0; i < parseInt($inputlength.value); i++) {
      var index = Math.floor(Math.random() * allArrays.length)
      result = result + allArrays[index]
      console.log(result)
    }
  }
  return result
}