// Function that runs through a loop based on user's size choice, and creates divs to populate the grid
// adds an event listener to each div that calls the colourDrawing function on mouse hover
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

// Adds a default grid on initial page load
document.addEventListener("load", createGrid(16));

// Function that changes the target's background color to black
function colourDrawing(e) {

    e.target.style.backgroundColor = 'black';
   
}

// Function that goes through all children in the grid and removes them
function clearGrid() {
    let grid = document.querySelector(".container");

        while (grid.firstChild) {
            grid.firstChild.remove();
        }
   
}

// Function that clears the grid and repopulates it based on user's input
document.getElementById("reset").onclick = buttonFunc;

function buttonFunc() {
    clearGrid();

    let userChoice = prompt("Enter how many squares you would like per side (max = 100): ");

    if (userChoice > 100) {
        userChoice = prompt("That's too many squares! The max is 100:")
    } 

    createGrid(userChoice);
}