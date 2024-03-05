const gridContainer = document.getElementById('grid-container');

// Create 16x16 grid squares
for (let i = 0; i < 16 * 16; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridContainer.appendChild(gridSquare);

    //Add event listeners for hover effect
    gridSquare.addEventListener("mouseover", handleHover);
}


//Function to handle hover effect
function handleHover(event) {
    const currentSquare = event.target;

    //Add the "hovered" class to permanently change the color
    currentSquare.classList.add("hovered");
}