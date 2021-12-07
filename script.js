//let gridChoice = 16;
const gridContainer = document.querySelector(".grid-container");
let counter = 0;
//CSS variables
let root = document.querySelector(':root');
let rootStyles = getComputedStyle(root);
let gridSize = rootStyles.getPropertyValue('--grid-size');
let drawColor = rootStyles.getPropertyValue('--draw-color');
//root.style.setProperty('--draw-color', '#ffffff');
//root.style.setProperty('--grid-size', 32);

let tileCount = gridSize*gridSize;
//Fill grid with divs
while (counter < tileCount) {
    counter++;
    const gridDiv = document.createElement("div");
    gridContainer.appendChild(gridDiv);
}
const gridItems = gridContainer.querySelectorAll("div.grid-container div");
gridItems.forEach(item => item.style.backgroundColor='var(--draw-color)');
