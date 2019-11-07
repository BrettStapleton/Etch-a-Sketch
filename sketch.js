const container = document.querySelector('#container');
const button = document.querySelector('#clear-btn');
button.addEventListener('click', clearScreen);

function createGrid(squaresPerSide) {
    container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 40px)`;
    container.style.gridTemplateRows = `repeat(${squaresPerSide}, 40px)`;
    
    for (let i=0; i < (squaresPerSide * squaresPerSide); i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute("lightness", 50);
        square.addEventListener('mouseover', function(e){
            currentLightness = e.target.getAttribute("lightness");
            e.target.style.backgroundColor = `hsl(${Math.floor(Math.random()*361)}, 100%, ${currentLightness}%)`;
            e.target.setAttribute("lightness", currentLightness-5);
        });
        container.appendChild(square);
    }
}

function clearScreen() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.remove();
    });
    const userSquares = prompt("Enter number of squares per side");
    createGrid(userSquares);
}

createGrid(16);