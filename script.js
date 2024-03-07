// Get the element with the ID 'grid-container' from the document and store it in the constant 'gridContainer'
const gridContainer = document.getElementById('grid-container');

// Create a default 16x16 grid squares
for (let i = 0; i < 16 * 16; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridContainer.appendChild(gridSquare);

    //Add event listeners for hover effect
    gridSquare.addEventListener("mouseover", handleHover);
}

// Function to create a grid of squares
// Clear any existing grid by calling the clearGrid function
function createGrid(squaresPerSide) {
    clearGrid();
    
    //Calculate square size to fit within 640px
    const squareSize = 640 / squaresPerSide;
    
    // This loop creates a new grid square for each square in the grid.
    // Create a new div element for the grid square
    // Add the 'grid-square' class to the grid square
    // Set the width of the grid square
    // Set the height of the grid square
    // Add the grid square to the grid container
    // Add an event listener to the grid square for the hover effect
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.style.width = `${squareSize}px`;
        gridSquare.style.height = `${squareSize}px`;
        gridContainer.appendChild(gridSquare);
        gridSquare.addEventListener('mouseover', handleHover);
    }
}

//Function to clear existing grid
function clearGrid() {
    gridContainer.innerHTML = "";
}

// Function to handle mouse hover effect
// Get the element that triggered the hover event
// Add the "hovered" class to permanently change the color
function handleHover(event) {
    const currentSquare = event.target;
    currentSquare.classList.add("hovered");
}

// Function to reset the grid based on user input
// Prompt the user to enter the number of squares per side (up to 100)
// Validate user input
// Check if the input is not null and not an empty string
// Parse the input to an integer
// Check if the parsed input is a number, and if it's between 1 and 100 (inclusive)
// If the input is valid, create a new grid with the specified number of squares per side
// If the input is not valid, alert the user to enter a valid number
function resetGrid() {
    const squaresPerSideInput = prompt("Enter the number of squares per side (up to 100):");

    if (squaresPerSideInput !== null && squaresPerSideInput !== "") {
        const squaresPerSide = parseInt(squaresPerSideInput);

        if (!isNaN(squaresPerSide) && squaresPerSide > 0 && squaresPerSide <= 100) {
            createGrid(squaresPerSide);
        } else {
            alert("Please enter a valid number between 1 and 100.");
        }
    }
}