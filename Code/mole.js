let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setgame();
}

function setgame() {
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();  // Set an ID for each tile
        tile.addEventListener("click", selectTile);  // Correct event listener syntax
        document.getElementById("board").appendChild(tile);  // Add the tile to the board
    }
    setInterval(setMole, 1000);  // Set mole every 1 second
    setInterval(setPlant, 2000);  // Set plant every 2 seconds
}

function setMole() {
    if (gameOver) return;

    if (currMoleTile) {
        currMoleTile.innerHTML = "";  // Clear previous mole
    }

    let mole = document.createElement("img");
    mole.src = "monty-mole.png";  // Ensure this path is correct

    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id == num) {
        return;  // Avoid placing mole where a plant is
    }

    currMoleTile = document.getElementById(num);  // Get the tile by ID
    currMoleTile.appendChild(mole);  // Add mole image to the tile
}

function getRandomTile() {
    return Math.floor(Math.random() * 9).toString();  // Get a random tile index (0 to 8)
}

function setPlant() {
    if (gameOver) return;

    if (currPlantTile) {
        currPlantTile.innerHTML = "";  // Clear previous plant
    }

    let plant = document.createElement("img");
    plant.src = "piranha-plant.png";  // Ensure this path is correct

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;  // Avoid placing plant where a mole is
    }

    currPlantTile = document.getElementById(num);  // Get the tile by ID
    currPlantTile.appendChild(plant);  // Add plant image to the tile
}

function selectTile() {
    if (gameOver) return;

    // Check if the clicked tile is the mole
    if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = "Score: " + score;
    }
    // Check if the clicked tile is the plant (game over)
    else if (this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER. Final Score: " + score;
        gameOver = true;
    }
}
