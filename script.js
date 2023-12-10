
function createGrid() {
    const containerDiv = document.querySelector(".container");

    for (let i=0; i < 256; i++) {
        let childDiv = document.createElement('div');
        childDiv.className = "square";
        childDiv.classList.add(`div${i}`)
        childDiv.addEventListener("mouseover", randomColour);
        containerDiv.append(childDiv);
        
    }

    
}

createGrid();

function randomColour(e) {

    e.target.style.backgroundColor = 'black';
   
}
