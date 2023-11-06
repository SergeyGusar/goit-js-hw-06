const input = document.querySelector('input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = input.value;
  const initialSize = 30;
  const fragment = document.createDocumentFragment();
  
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    const size = initialSize + i * 10;
    const color = getRandomHexColor();
    
    div.style.width = size + 'px';
    div.style.height = size + 'px';
    div.style.backgroundColor = color;
    
    fragment.appendChild(div);
  }
  
  boxesDiv.innerHTML = '';
  boxesDiv.appendChild(fragment);
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
