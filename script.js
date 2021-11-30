let gridChoice = 16;
let gridSize = gridChoice*gridChoice;
const gridContainer = document.querySelector(".grid-container");
const testText = document.querySelector("p");
let counter = 0;

while (counter < gridSize) {
    counter++;
    const gridDiv = document.createElement("div");
    gridContainer.appendChild(gridDiv);
}

testText.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor = "orange";
});