let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = []
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function createBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function createSnake(params) {
    for(i = 0; snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, box, box);
    }
}

criarBG();
createSnake();