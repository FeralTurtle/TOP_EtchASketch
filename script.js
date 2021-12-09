function makeGrid(gridChoice) {
    //Change grid size (ln.3-4. Adjusts size variable in CSS and JS respectively.)
    root.style.setProperty('--grid-size', gridChoice);
    gridSize = gridChoice;
    let counter = 0;
    let tileCount = gridSize * gridSize;

    //Fill grid with divs
    while (counter < tileCount) {
        counter++;
        const gridDiv = document.createElement("div");
        gridContainer.appendChild(gridDiv);
    }

    gridItems = gridContainer.querySelectorAll("div.grid-container div");
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add("tile-color");
        });
    });
}

const gridContainer = document.querySelector(".grid-container");
const resetBtn = document.querySelector("button");
let gridItems;
//CSS variables
let root = document.querySelector(':root');
let rootStyles = getComputedStyle(root);
let gridSize = rootStyles.getPropertyValue('--grid-size');
let drawColor = rootStyles.getPropertyValue('--draw-color');


makeGrid(8);

resetBtn.onclick = () => {
    gridSize = 0;

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    let newSize = window.prompt("Enter new grid size:");
    if (newSize > 100) {
        newSize = window.prompt("Size too high. Please enter a valid value: ");
    }
    gridSize = newSize;
    makeGrid(newSize);
};
