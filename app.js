///////////////

// AMOEBA GAME

//////////////


/// Render Player

// Get canvas element and define context
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Listens for keydown
window.addEventListener("keydown", moveSomething, false);

// Define player x,y and size
var playerX = 75;
var playerY = 75;
var playerSize = 25;
var velX = 2;
var velY = 2;


/// Render other bubbles

// Draws another bubble

  function drawBubbles() {

    for (i = 0; i < 5; i++) {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    var bubblesXval = Math.random() * innerWidth;
    var bubblesYval = Math.random() * innerHeight;

    // Draws circle
    ctx.beginPath();
    ctx.arc(bubblesXval, bubblesYval, 5, 0, 2 * Math.PI, false);
    ctx.closePath();

    // Colors the circle green
    ctx.fillStyle = 'green';
    ctx.fill();
  }
}

// Adds keycodes to the event listener and moves the circle
function moveSomething(e) {
    switch(e.keyCode) {
        case 37:
        playerX -= velX;
            // left key pressed
            break;
        case 38:
        playerY -= velY;
            // up key pressed
            break;
        case 39:
        playerX += velX;
            // right key pressed
            break;
        case 40:
        playerY += velY;
            // down key pressed
            break;
    }

    // Redraws the circle after key is pressed
    drawPlayer();
}

// Renders the circle on the canvas
function drawPlayer(e) {
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  drawBubbles();
  // Draws circle
  ctx.beginPath();
  ctx.arc(playerX, playerY, playerSize, 0, 2 * Math.PI, false);
  ctx.closePath();

  // Colors the circle green
  ctx.fillStyle = 'green';
  ctx.fill();
}

drawPlayer();
