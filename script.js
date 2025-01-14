let dimension = 16;

function createGrid(dim) { 
    const cont = document.querySelector(".container");
    const w = cont.getBoundingClientRect().width - 10;
    const boxDim = Math.floor(w/dim);
    for(let i=0;i<dim**2;i++){
        const div = document.createElement("div");
        div.classList.add("gridbox");
        div.style.height = `${boxDim}px`;
        div.style.width = `${boxDim}px`;
        cont.appendChild(div);
    }
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
    createGrid(dimension);
}

const boxes = document.querySelectorAll(".gridbox");
boxes.forEach((box) => {
    box.addEventListener("mouseenter", () => addColor(box))
})

const dimBox = document.querySelector(".limit");
dimBox.addEventListener("click",() => promptDimension());