const copiedText = document.querySelector('.copied-txt');

const rangeInput = document.getElementById('characters-range');
const rangeNumber = document.getElementById('range-number');
let rangeCurrentNumber = Number(rangeInput.value);

const checkboxInputs = document.querySelectorAll('[type=checkbox]');
const selectedCheckboxes = [];

const typeStrengthTitle = document.getElementById('strength-title');
const boxes = document.querySelectorAll('.strength-boxes > div');

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const Numbers = '1234567890';
const Symbols = '!@#$%^&*?';

// form

//password-length

rangeNumber.textContent = '8';

rangeInput.addEventListener('input', (e) => {
	let min = Number(e.target.min);
	let max = Number(e.target.max);
	let value = Number(e.target.value);
	rangeCurrentNumber = value;

	let percentage = ((value - min) / (max - min)) * 100;

	rangeNumber.textContent = `${value}`;

	rangeInput.style.background = `linear-gradient(to right, #A4FFAF 0%, #A4FFAF ${percentage}%, #18171F ${percentage}%, #18171F 100%)`;
});

//password-characteristics

const selectedCharacterSets = () => {
	selectedCheckboxes.length = 0;

	if (document.getElementById('uppercase').checked)
		selectedCheckboxes.push(uppercaseLetters);
	if (document.getElementById('lowercase').checked)
		selectedCheckboxes.push(lowercaseLetters);
	if (document.getElementById('numbers').checked)
		selectedCheckboxes.push(Numbers);
	if (document.getElementById('symbols').checked)
		selectedCheckboxes.push(Symbols);

	return selectedCheckboxes;
};

// password strength

const getPasswordStrength = (e) => {
	typeStrengthTitle.style.display = 'none';
	selectedCharacterSets();

	boxes.forEach((box) => {
		box.style.backgroundColor = 'inherit';
		box.style.border = '1px solid #E6E5EA';
	});

	if (selectedCheckboxes.length === 0) {
		alert('Please, choose at least one character type');
		typeStrengthTitle.textContent = '';

		return;
	}

	const strengthStates = [
		{ title: 'too weak', color: '#F64A4A', count: 1 },
		{ title: 'weak', color: '#FB7C58', count: 2 },
		{ title: 'medium', color: '#F8CD65', count: 3 },
		{ title: 'strong', color: '#A4FFAF', count: 4 },
	];

	const level = strengthStates[selectedCheckboxes.length - 1];

	typeStrengthTitle.textContent = level.title;
	typeStrengthTitle.style.display = 'flex';

	for (let i = 0; i < selectedCheckboxes.length; i++) {
		boxes[i].style.border = 'none';
		boxes[i].style.backgroundColor = level.color;
	}
};

// Generate PassWord

const generatePassword = (rangeCurrentNumber) => {
	getPasswordStrength();
	const selectedCheckboxes = selectedCharacterSets();

	const allCharacters = selectedCheckboxes.join('');
	let password = '';

	for (let i = 0; i < rangeCurrentNumber; i++) {
		const randomIndex = Math.floor(
			Math.random() * allCharacters.length
		);
		password += allCharacters[randomIndex];
	}

	return password;
};

let password = '';

const handleGenerateBtnEvent = (e) => {
	e.preventDefault();

	password = generatePassword(rangeCurrentNumber);

	if (password.includes('undefined')) return;

	document.getElementById('password-gen').value = password;
};

// Copy to Clipboard

const copyPasswordToClipboard = (password) => {
	navigator.clipboard
		.writeText(password)
		.then(() => {
			copiedText.style.display = 'block';
			setTimeout(() => {
				copiedText.style.display = 'none';
			}, 1500);
		})
		.catch((error) => console.error('Failes to copy', error));
};

// Btn-action

const generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener('click', handleGenerateBtnEvent);

const clipboardImage = document.getElementById('clipboard-img');

clipboardImage.addEventListener('click', () =>
	copyPasswordToClipboard(password)
);
