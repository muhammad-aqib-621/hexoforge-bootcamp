const inputText = document.getElementById('inputText');
const output = document.getElementById('output');

document.getElementById('boldBtn').addEventListener('click', () => {
  output.classList.toggle('bold');
  updateOutput();
});

document.getElementById('italicBtn').addEventListener('click', () => {
  output.classList.toggle('italic');
  updateOutput();
});

document.getElementById('underlineBtn').addEventListener('click', () => {
  output.classList.toggle('underline');
  updateOutput();
});

inputText.addEventListener('input', updateOutput);

function updateOutput() {
  output.textContent = inputText.value;
}
