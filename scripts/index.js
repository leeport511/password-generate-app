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

const addPasswordCharacteristics = () => {
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

  //todo: despues hacer una constante q se el level, actulizar el titulo y hacer un for para aplicar el estilo.

  const strengthStates = [
    { title: "too weak", color: "#F64A4A", count: 0 },
    { title: "weak", color: "#FB7C58", count: 1 },
    { title: "medium", color: "#F8CD65", count: 2 },
    { title: "medium", color: "#F8CD65", count: 2 },
    { title: "strong", color: "#A4FFAF", count: 4 },
  ];

  const level =
    strengthStates[selectedCheckboxes.length] ||
    strengthStates[selectedCheckboxes.length - 1];

  typeStrengthTitle.textContent = level.title;
  typeStrengthTitle.style.display = "flex";

  for (let i = 0; i <= level.count; i++) {
    console.log(boxes[i]);

    boxes[i].style.border = "none";
    boxes[i].style.backgroundColor = level.color;
  }
};

// Btn-action ()

const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", getPasswordStrength);
