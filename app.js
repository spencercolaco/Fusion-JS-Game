var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

window.addEventListener("keydown", moveSomething, false);


var playerX = 75;
var playerY = 75;
var playerSize = 25;

function moveSomething(e) {
    switch(e.keyCode) {
        case 37:
        playerX -= 2;
        console.log('w00t');
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

    drawCircle();
}

function drawCircle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(playerX, playerY, playerSize, 0, 2 * Math.PI);
  ctx.closePath();

  ctx.fillStyle = 'green';
  ctx.fill();
}

drawCircle();
