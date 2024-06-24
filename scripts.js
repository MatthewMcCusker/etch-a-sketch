function getRandomRGB() {
    const rand255 = () => Math.floor(Math.random() * 256);
    const r = rand255();
    const g = rand255();
    const b = rand255();
    return `rgb(${r},${g},${b})`
}

function createSquare() {
    let square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", function (e) {
        e.target.style.background = getRandomRGB();
    })
    return square;
}

function createGrid(gridSize) {
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

function initializeButton(){
    const button = document.querySelector('button');
    button.addEventListener('click', function (e) {
        let response = parseInt(prompt('Enter a grid size between 1-100'));
        if (!isNaN(response)){
            response = Math.max(response, MIN_SIZE);
            response = Math.min(response, MAX_SIZE);
            createGrid(response);
        }
    })
}

const MIN_SIZE = 0;
const DEFAULT_SIZE = 10;
const MAX_SIZE = 100;

createGrid(10);

initializeButton();
