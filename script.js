const body = document.querySelector('body');
const button = document.querySelector('button');
const root = document.querySelector(':root');
let container;

const validateInput = (input) => {
  console.log(typeof input);
  if(typeof input != 'number') {
    alert("You can only input numbers!");
    return;
  }
  else {
    if (input > 150) {
      alert("Your grid needs to be under 150 squares wide");
      return;
    }
    return true;
  }
};

const createGrid = (size) => {
  if (validateInput(size) !== true) { 
    const grid = parseInt(prompt("What size of grid would you like?"));
    createGrid(grid);
    return;
  }
  root.style.setProperty('--grid-size', size);
  container = document.createElement('div');
  container.classList.add('container');
  for(let i = 0; i<size**2; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    div.addEventListener('mouseover', (event) => div.classList.add('hover'));
    container.appendChild(div);
  }
  body.appendChild(container);
};

const clearGrid = () => {
  body.removeChild(container);
  const grid = parseInt(prompt("What size of grid would you like?"));
  createGrid(grid);
};

button.addEventListener('click', clearGrid);

createGrid(70);


