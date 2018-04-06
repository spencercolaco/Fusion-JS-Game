var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

window.addEventListener("keydown", moveSomething, false);

var deltaX = 0;
var deltaY = 0;

function moveSomething(e) {
    switch(e.keyCode) {
        case 37:
        deltaX -= 2;
        console.log('w00t');
            // left key pressed
            break;
        case 38:
        deltaY -= 2;
            // up key pressed
            break;
        case 39:
        deltaX += 2;
            // right key pressed
            break;
        case 40:
        deltaY += 2;
            // down key pressed
            break;
    }

    drawCircle();
}

function drawCircle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();

  ctx.moveTo(200 + deltaX, 100 + deltaY);

  ctx.arc(100,75,50,0,2*Math.PI);
  ctx.fillStyle = 'green';
  ctx.fill()
}

drawCircle();
