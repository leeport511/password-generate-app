










// form

//todo: dar color a la barra cuando cambio el rango si decrece o crece y cambiar ese numero en el documento.

const rangeInput = document.getElementById('characters-range');
const rangeNumber = document.getElementById('range-number');

rangeInput.addEventListener('input', (e) => {

      let min = Number(e.target.min);
      let max = Number(e.target.max);
      let value = Number(e.target.value);
      
      
      rangeNumber.textContent = `${value}`

})