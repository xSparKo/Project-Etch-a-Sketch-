const gridContainer = document.getElementById('grid-container');

// Create 16x16 grid squares
for (let i = 0; i < 16 * 16; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridContainer.appendChild(gridSquare);
}
