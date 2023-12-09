
function createGrid() {
    const containerDiv = document.querySelector(".container");

    for (let i=0; i < 15; i++) {
        let childDiv = document.createElement('div');
        childDiv.className = "square";
        containerDiv.append(childDiv);
    }
}

createGrid();
