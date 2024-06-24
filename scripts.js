function createSquare() {
    let square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", function (e) {
        e.target.style.background = "teal";
    })
    return square;
}

function createGrid(gridSize) {
    if(gridSize > MAX_SIZE) {
        gridSize = MAX_SIZE;
    }
    const container = document.querySelector('#container');
    container.textContent = '';
    for (let i = 0; i < gridSize; i++){
        let column = document.createElement("div");
        column.classList.add("column");
        for (let j = 0; j < gridSize; j++) {
            let square = createSquare();
            column.appendChild(square);
        }
        container.appendChild(column);
    }
}

const DEFAULT_SIZE = 10;
const MAX_SIZE = 100;

createGrid(10);
