
function createGrid() {
    const containerDiv = document.querySelector(".container");

    for (let i=0; i < 256; i++) {
        let childDiv = document.createElement('div');
        childDiv.className = "square";
        containerDiv.append(childDiv);
        childDiv.addEventListener("mouseover", randomColour, false);
    }

    
}

createGrid();

function randomColour() {
    

   
}
