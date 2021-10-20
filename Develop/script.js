
const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')

const includeLowecaseElement = document.getElementById
('lowercase')
const includeUppercaseElement = document.getElementById
('uppercase')
const includeNumericElement = document.getElementById
('numeric')
const includeSpecialCharactersElement = document.getElementById
('specialCharacter')

// ASCII Character Codes
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh (97, 122)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh (65, 90)
const NUMERIC_CHAR_CODES = arrayFromLowToHigh (48,57 )
const SPECIAL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
  ).concat( 
  arrayFromLowToHigh(91, 96)
  ).concat(
  arrayFromLowToHigh(123, 126)
  )

characterAmountRange.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)



// pasword elements and comand for putting them together
const form =document.getElementById('passwordGeneratorForm')
form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeLowecase = includeLowecaseElement.checked
  const includeUppercase = includeUppercaseElement.checked
  const includeNumeric = includeNumericElement.checked
  const includeSpecialCharacters = includeSpecialCharactersElement.checked
  const password = generatePassword (characterAmount, includeUppercase, includeLowecase, 
    includeNumeric, includeSpecialCharacters)
})
 // Passsword generation 
function generatePassword( characterAmount, includeLowecase, includeUppercase, includeNumeric, includeSpecialCharacters){
console.log(LOWERCASE_CHAR_CODES)
}

//array generation function
function arrayFromLowToHigh (low, high){
  const array =[]
  for (let i = low; i <= high; i++)
  array.push(i)

// array return
return array
}

function syncCharacterAmount(e){
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}

  
  
 


