///////////////

// Fusion GAME

//////////////


// Get canvas element and define context
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Sets canvas width
canvas.width = window.innerWidth;
canvas.height = window.innerHeight * .90;

// Makes canvas width responsive
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Listens for keydown
window.addEventListener("keydown", moveSomething, false);


//// Render other bubbles

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

    ctx.fillStyle = '#C8C8A9';
    ctx.fill();
  }
  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x + this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y + this.radius < 0) {
      this.dy = -this.dy;
    }
      this.x += this.dx;
      this.y += this.dy;
  }
}

// Stores small circles properties in an array
var bubbleArray = [];

// Loops through array and sets properties
for (var i = 0; i < 100; i++) {
  var x = Math.random() * innerWidth;
  var y = Math.random() * innerHeight;
  var radius = 15;
  var dx = (Math.random() - .5) * 2;
  var dy = (Math.random() - .5) * 2;
  bubbleArray.push(new Bubble(x, y, dx, dy, radius));
}
// var bubble = new Bubble(200, 3, 3, 30);


//// Render antimatter

function Antimatter(ax, ay, adx, ady, aradius) {
  this.ax = ax;
  this.ay = ay;
  this.adx = adx;
  this.ady = ady;
  this.aradius = aradius;

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.ax, this.ay, this.aradius, 0, 2 * Math.PI, false);
    ctx.closePath();

    ctx.fillStyle = '#EF4566';
    ctx.fill();
  }

  // Moves red circles
  this.update = function() {
    if (this.ax + this.aradius > innerWidth || this.ax + this.aradius < 0) {
      this.adx = -this.adx;
    }
    if (this.ay + this.aradius > innerHeight || this.ay + this.aradius < 0) {
      this.ady = -this.ady;
    }
      this.ax += this.adx;
      this.ay += this.ady;
  }
}

// Stores red circles properties in an array
var antimatterArray = [];

// Loops through array and sets properties
for (var i = 0; i < 2; i++) {
  var ax = Math.random() * innerWidth;
  var ay = Math.random() * innerHeight;
  var aradius = 15;
  var adx = (Math.random() - .5) * 20;
  var ady = (Math.random() - .5) * 20;
  antimatterArray.push(new Antimatter(ax, ay, adx, ady, aradius));
}


//// Check for win/loss

function checkWinner() {
  if (bubbleArray.length == 0) {
    bubbleArray.push(new Bubble(5000, 5000, 0, 0, 0));
    alert('You win! Refresh the page to play again.');
  }
}

function setLoss() {
  if (antimatterArray.length == 1) {
    antimatterArray.push(new Antimatter(5000, 5000, 0, 0, 0));
    alert('You lose :[');
  }
}


//// Render player + set key codes

// Adds keycodes to the event listener and moves the circle
function moveSomething(e) {
    switch(e.keyCode) {
        case 37:
        playerX -= velX;
            // left key pressed
            break;
        case 39:
        playerX += velX;
            // right key pressed
            break;
        case 38:
        playerY -= velY;
            // up key pressed
            break;
        case 40:
        playerY += velY;
            // down key pressed
            break;
    }
}

// Define player x,y and size
var playerX = 75;
var playerY = 75;
var playerSize = 25;
var velX = 35;
var velY = 35;

// Renders the circle on the canvas
function drawPlayer() {
  requestAnimationFrame(drawPlayer);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  // Render and move small circles
  for (var i = 0; i < bubbleArray.length; i++) {
    bubbleArray[i].draw();
    bubbleArray[i].update();
  }

  // Render and move red circles
  for (var i = 0; i < antimatterArray.length; i++) {
    // antimatterArray[i].draw();
    // antimatterArray[i].update();
  }

  // Draws circle
  ctx.beginPath();
  ctx.arc(playerX, playerY, playerSize, 0, 2 * Math.PI, false);
  ctx.closePath();

  // Colors the circle green
  ctx.fillStyle = '#83AE9B';
  ctx.fill();

  // Remove bubble when player passes over
  for (var i = 0; i < bubbleArray.length; i++) {
    if (playerX + playerSize >= bubbleArray[i].x && playerX - playerSize <= bubbleArray[i].x
          && playerY + playerSize >= bubbleArray[i].y && playerY - playerSize <= bubbleArray[i].y) {
          bubbleArray.splice(i, 1);
          playerSize += 1;
    }
  }
  // Set loss when player hits red circle
  for (var i = 0; i < antimatterArray.length; i++) {
    if (playerX + playerSize >= antimatterArray[i].ax && playerX - playerSize <= antimatterArray[i].ax
          && playerY + playerSize >= antimatterArray[i].ay && playerY - playerSize <= antimatterArray[i].ay) {
          antimatterArray.splice(i, 1);
          setLoss();
    }
  }
  checkWinner();
}

drawPlayer();
