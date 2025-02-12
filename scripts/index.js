const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "1234567890";
const Symbols = "!@#$%^&*?";

// form

//password-length

const rangeInput = document.getElementById("characters-range");
const rangeNumber = document.getElementById("range-number");
let rangeCurrentNumber = Number(rangeInput.value);
rangeNumber.textContent = "8";

rangeInput.addEventListener("input", (e) => {
  let min = Number(e.target.min);
  let max = Number(e.target.max);
  let value = Number(e.target.value);
  rangeCurrentNumber = value;

  let percentage = ((value - min) / (max - min)) * 100;

  rangeNumber.textContent = `${value}`;

  rangeInput.style.background = `linear-gradient(to right, #A4FFAF 0%, #A4FFAF ${percentage}%, #18171F ${percentage}%, #18171F 100%)`;
});

//password-characteristics

const checkboxInputs = document.querySelectorAll("[type=checkbox]");
const selectedCheckboxes = [];

checkboxInputs.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const { value, checked } = checkbox;
    console.log(
      `Este checkbox ${value} acaba de ser seleccionado y esta en ${checked}`
    );
  });
});

const addPasswordCharacteristics = (e) => {
  selectedCheckboxes.length = 0;

  checkboxInputs.forEach(({ id, checked }) => {
    checked && selectedCheckboxes.push(id);
  });

  console.log(selectedCheckboxes);

  return selectedCheckboxes;
};

// password strength

const typeStrengthTitle = document.getElementById("strength-title");
const boxes = document.querySelectorAll(".strength-boxes > div");
const strengthBox1 = document.querySelector(".box-1");
const strengthBox2 = document.querySelector(".box-2");
const strengthBox3 = document.querySelector(".box-3");
const strengthBox4 = document.querySelector(".box-4");

const getPasswordStrength = (e) => {
  e.preventDefault();

  typeStrengthTitle.style.display = "none";
  addPasswordCharacteristics();

  boxes.forEach((box) => {
    box.style.backgroundColor = "inherit";
    box.style.border = "1px solid #E6E5EA";
  });

  // todo: hacer un array con objetos adentro q tenga el titulo, el color y el count respectivo
  //todo: despues hacer una constante q se el level, actulizar el titulo y hacer un for para aplicar el estilo.

  switch (true) {
    case selectedCheckboxes.length === 0:
      typeStrengthTitle.textContent = `too weak`;
      typeStrengthTitle.style.display = "flex";
      strengthBox1.style.border = "none";
      strengthBox1.style.backgroundColor = "#F64A4A";

      return;

    case selectedCheckboxes.length === 1:
      typeStrengthTitle.textContent = `weak`;
      typeStrengthTitle.style.display = "flex";
      strengthBox1.style.border = "none";
      strengthBox1.style.backgroundColor = "#FB7C58";
      strengthBox2.style.border = "none";
      strengthBox2.style.backgroundColor = "#FB7C58";

      return;

    case selectedCheckboxes.length === 2 || selectedCheckboxes.length === 3:
      typeStrengthTitle.textContent = `medium`;
      typeStrengthTitle.style.display = "flex";

      return;

    case selectedCheckboxes.length === 4:
      typeStrengthTitle.textContent = `strong`;
      typeStrengthTitle.style.display = "flex";

      return;

    default:
      console.log(`algo esta fallando`);

      return;
  }
};

// Btn-action ()

const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", getPasswordStrength);
