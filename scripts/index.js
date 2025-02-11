










// form

//password-length

const rangeInput = document.getElementById('characters-range');
const rangeNumber = document.getElementById('range-number');
let rangeCurrentNumber = Number(rangeInput.value);

rangeInput.addEventListener('input', (e) => {

      let min = Number(e.target.min);
      let max = Number(e.target.max);
      let value = Number(e.target.value);
      rangeCurrentNumber = value;
      
      let percentage = (( value - min ) / ( max - min ) * 100)
      
      rangeNumber.textContent = `${value}`

      rangeInput.style.background = `linear-gradient(to right, #A4FFAF 0%, #A4FFAF ${percentage}%, #18171F ${percentage}%, #18171F 100%)` ;

})


//password-characteristics

const checkboxInputs = document.querySelectorAll("[type=checkbox]");
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const Numbers = '1234567890';
const Symbols = '!@#$%^&*?'

//Todo: crear funcion que me dispare que opciones estan seleccionadas








// Btn-action

const generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener('click', () => {} )