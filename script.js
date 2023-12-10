
function createGrid(sizeChoice) {
    const containerDiv = document.querySelector(".container");

    let size = sizeChoice * sizeChoice;

    for (let i=0; i < size; i++) {
        let childDiv = document.createElement('div');
        childDiv.className = "square";
        childDiv.classList.add(`div${i}`)
        childDiv.addEventListener("mouseover", colourDrawing);

        let squareSize = 480 / sizeChoice;
        childDiv.style.height = `${squareSize}px`;
        childDiv.style.width = `${squareSize}px`;
        console.log(squareSize)
        containerDiv.append(childDiv);
        
    }

    
}

function changeHeight() { 

    let grid = document.querySelectorAll('.square');

    let squareSize = 480 / userChoice;

    for ( i = 0; i < grid.length; i++) {
        grid[i].style.height = `${squareSize}px`;
        grid[i].style.width = `${squareSize}px`;
    };

  } 

document.addEventListener("load", createGrid(16));


function colourDrawing(e) {

    e.target.style.backgroundColor = 'black';
   
}

function clearGrid() {
    let grid = document.querySelector(".container");

        while (grid.firstChild) {
            grid.firstChild.remove();
        }
   
}

document.getElementById("reset").onclick = buttonFunc;

function buttonFunc() {
    clearGrid();

    let userChoice = prompt("Enter how many squares you would like per side (max = 100): ");

    if (userChoice > 100) {
        userChoice = prompt("That's too many squares! The max is 100:")
    } 

    createGrid(userChoice);
}