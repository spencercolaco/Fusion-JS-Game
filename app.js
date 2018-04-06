// Get canvas element and define context
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Listens for keydown
window.addEventListener("keydown", moveSomething, false);

// Define player x,y and size
var playerX = 75;
var playerY = 75;
var playerSize = 25;

// Adds keycodes to the event listener and moves the circle
function moveSomething(e) {
    switch(e.keyCode) {
        case 37:
        playerX -= 2;
            // left key pressed
            break;
        case 38:
        playerY -= 2;
            // up key pressed
            break;
        case 39:
        playerX += 2;
            // right key pressed
            break;
        case 40:
        playerY += 2;
            // down key pressed
            break;
    }

    // Redraws the circle after key is pressed
    drawCircle();
}

// Renders the circle on the canvas
function drawCircle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draws circle
  ctx.beginPath();
  ctx.arc(playerX, playerY, playerSize, 0, 2 * Math.PI);
  ctx.closePath();

  // Colors the circle green
  ctx.fillStyle = 'green';
  ctx.fill();
}

// Renders initial circle 
drawCircle();
