let gridChoice = 16;
let gridSize = gridChoice*gridChoice;
const gridContainer = document.querySelector(".grid-container");
let counter = 0;

//Fill grid with divs
while (counter < gridSize) {
    counter++;
    const gridDiv = document.createElement("div");
    gridContainer.appendChild(gridDiv);
}
const gridItems = gridContainer.querySelectorAll("div.grid-container div");
gridItems.forEach(item => item.style.backgroundColor="#2d5986");

