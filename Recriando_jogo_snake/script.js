let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = []
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right"

//Criation of background
function createBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

//Criation of snake
function createSnake(params) {
    for(i = 0; snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, box, box);
    }
}

//Starting the game
function startGame() {
    createBG();
    createSnake();

    //How the snake make move
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX =+ box; 
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY += box;
    if (direction == "down") snakeY -= box;

    //Creating a new head of snake
    snake.pop()

    let newHead = {
        X: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let game = setInterval(startGame, 100);