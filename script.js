
function createGrid() {
    const containerDiv = document.querySelector(".container");

    for (let i=0; i < 256; i++) {
        let childDiv = document.createElement('div');
        childDiv.className = "square";
        childDiv.classList.add(`div${i}`)
        childDiv.addEventListener("mouseover", colourDrawing);
        containerDiv.append(childDiv);
        
    }

    
}

createGrid();

function colourDrawing(e) {

    e.target.style.backgroundColor = 'black';
   
}

function clearGrid() {

    let grid = document.querySelectorAll('.square');

    console.log(grid);

    for ( i = 0; i < grid.length; i++) {
        grid[i].style.backgroundColor = "white";
        };

    // grid.style.backgroundColor = 'white';
   
}

document.getElementById("reset").onclick = buttonFunc;

function buttonFunc() {
    clearGrid();

    let userChoice = prompt("Enter how many squares you would like per side (max = 100): ");

    if (userChoice > 100) {
        userChoice = prompt("That's too many squares! The max is 100:")
    } 

    console.log(userChoice);
}