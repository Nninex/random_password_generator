const passwordInput = document.getElementById("password-input");
const button = document.querySelector(".btn");
const copyButton = document.querySelector(".copy-btn");
const messageBox = document.getElementById("message-box");
const lengthInput = document.getElementById("length-input"); // New input for length

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = upperCase.toLowerCase();
const numbers = "0123456789";
const symbol = "@#*";

const allChar = upperCase + lowerCase + numbers + symbol;

function createPassword() {
  let password = "";

  // Add at least one character from each category
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  // Get the length from the input field
  const length = parseInt(lengthInput.value, 10);
  if (isNaN(length) || length < 4) {
    alert("Please enter a valid length (minimum 4).");
    return;
  }

  while (length > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }

  // Shuffle the password to ensure randomness
  password = password
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");

  passwordInput.value = password;
}

button.addEventListener("click", () => {
  createPassword();
  messageBox.style.scale = "0";
});

function copyText() {
  passwordInput.select();
  document.execCommand("copy");
}

copyButton.addEventListener("click", () => {
  copyText();
  messageBox.style.scale = "1";
});
