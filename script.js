// Get the element with the ID 'grid-container' from the document and store it in the constant 'gridContainer'
const gridContainer = document.getElementById('grid-container');

// Function to create a grid of squares
function createGrid(squaresPerSide) {
    // Clear any existing grid by calling the clearGrid function
    clearGrid();
    
    //Calculate square size to fit within 640px
    const squareSize = 640 / squaresPerSide;
    
    //Create new grid squares
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.style.width = `${squareSize}px`;
        gridSquare.style.height = `${squareSize}px`;
        gridContainer.appendChild(gridSquare);
        
        //Add event listener for hover effect
        gridSquare.addEventListener('mouseover', handleHover);
    }
}

// Create 16x16 grid squares
for (let i = 0; i < 16 * 16; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridContainer.appendChild(gridSquare);

    //Add event listeners for hover effect
    gridSquare.addEventListener("mouseover", handleHover);
}

//Function to clear existing grid
function clearGrid() {
    gridContainer.innerHTML = "";
}

//Function to handle hover effect
function handleHover(event) {
    const currentSquare = event.target;

    //Add the "hovered" class to permanently change the color
    currentSquare.classList.add("hovered");
}

// Function to reset the grid based on user input
function resetGrid() {
    // Prompt the user to enter the number of squares per side (up to 100)
    const squaresPerSideInput = prompt("Enter the number of squares per side (up to 100):");

    // Validate user input
    // Check if the input is not null and not an empty string
    if (squaresPerSideInput !== null && squaresPerSideInput !== "") {
        // Parse the input to an integer
        const squaresPerSide = parseInt(squaresPerSideInput);

        // Check if the parsed input is a number, and if it's between 1 and 100 (inclusive)
        if (!isNaN(squaresPerSide) && squaresPerSide > 0 && squaresPerSide <= 100) {
            // If the input is valid, create a new grid with the specified number of squares per side
            createGrid(squaresPerSide);
        } else {
            // If the input is not valid, alert the user to enter a valid number
            alert("Please enter a valid number between 1 and 100.");
        }
    }
}