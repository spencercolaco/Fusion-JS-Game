///////////////

// Fusion GAME

//////////////


// Get canvas element and define context
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Sets canvas width
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Makes canvas width responsive
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Listens for keydown
window.addEventListener("keydown", moveSomething, false);


//// Render other bubbles

// Draws another bubble

function Bubble(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.closePath();

    // Colors the circle green
    ctx.fillStyle = 'green';
    ctx.fill();
  }
//   for (i = 0; i < 5; i++) {
//   // ctx.clearRect(0, 0, canvas.width, canvas.height);
//
//   // Draws circle
//   ctx.beginPath();
//   ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
//   ctx.closePath();
//
//   // Colors the circle green
//   ctx.fillStyle = 'green';
//   ctx.fill();
// }
}

var bubbleArray = [];

for (var i = 0; i < 10; i++) {
  var x = Math.random() * innerWidth;
  var y = Math.random() * innerHeight;
  var radius = 5;
  var dx = (Math.random() - .05) * 8;
  var dy = (Math.random() - .05) * 8;
  bubbleArray.push(new Bubble(x, y, dx, dy, radius));
}
// var bubble = new Bubble(200, 3, 3, 30);


// Check for win condition
function checkWinner() {
  if (bubbleArray.length == 0) {
    bubbleArray.push(new Bubble(5000, 5000, 0, 0, 0));
    alert('You win! Refresh the page to play again.');
  }
}


/// Render player + set key codes

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

// Define player x,y and size
var playerX = 75;
var playerY = 75;
var playerSize = 25;
var velX = 20;
var velY = 20;

// Renders the circle on the canvas
function drawPlayer() {
  requestAnimationFrame(drawPlayer);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < bubbleArray.length; i++) {
    bubbleArray[i].draw();
  }

  // Draws circle
  ctx.beginPath();
  ctx.arc(playerX, playerY, playerSize, 0, 2 * Math.PI, false);
  ctx.closePath();

  // Colors the circle green
  ctx.fillStyle = 'green';
  ctx.fill();

  // Remove bubble when player passes over
  for (var i = 0; i < bubbleArray.length; i++) {
    if (playerX + playerSize >= bubbleArray[i].x && playerX - playerSize <= bubbleArray[i].x
          && playerY + playerSize >= bubbleArray[i].y && playerY - playerSize <= bubbleArray[i].y) {
          bubbleArray.splice(i, 1);
          playerSize += 5;
    }
  }
  checkWinner();
}

drawPlayer();
