let dimension = 16;

function createGrid(dim) { 
    const cont = document.querySelector(".container");
    const w = cont.getBoundingClientRect().width - 10;
    const boxDim = Math.floor(w/dim);
    
    // Clear any existing grid before creating a new one
    cont.innerHTML = '';

    for(let i = 0; i < dim**2; i++){
        const div = document.createElement("div");
        div.classList.add("gridbox");
        div.style.height = `${boxDim}px`;
        div.style.width = `${boxDim}px`;
        cont.appendChild(div);
    }

    // Now that the grid is created, add event listeners
    const boxes = document.querySelectorAll(".gridbox");
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", () => addColor(box))
    });
}

createGrid(dimension);

function addColor(element){
    element.classList.add("colorbox");
}

function promptDimension(){
    let dim = prompt("Enter the number of boxes on each side, up to 100");
    dim = Number(dim);
    if(dim > 100){
        dim = 100;
    }
    dimension = dim;
    resizeGrid(dim);
    createGrid(dim);  // Recreate the grid with the new dimension
}

function resizeGrid(dim) {
    const boxes = document.querySelectorAll(".gridbox");
    const cont = document.querySelector(".container");
    const w = cont.getBoundingClientRect().width - 10;
    const boxDim = Math.floor(w / dim);
    boxes.forEach((box) => {
        box.style.height = `${boxDim}px`;
        box.style.width = `${boxDim}px`;
    });
}

function resetGrid() {
    const boxes = document.querySelectorAll(".gridbox");
    boxes.forEach((box) => {
        box.classList.remove("colorbox");
    });
}

const dimBox = document.querySelector(".limit");
dimBox.addEventListener("click", () => promptDimension());

// Adding reset functionality
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => resetGrid());
