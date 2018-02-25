var rectA = 10;
var rectB = 30;
var increment = 1;
var goodToDraw = true;

function draw() {
	if (goodToDraw) {
		var canvas = document.getElementById('canvas');
		if (canvas.getContext) {
			var ctx = canvas.getContext('2d');

			ctx.fillStyle = 'rgb(255, 255, 255)';
			ctx.fillRect(0, 0, 200, 200);

			ctx.fillStyle = 'rgb(200, 0, 0)';
			ctx.fillRect(rectA, rectA, 50, 50);

			ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
			ctx.fillRect(rectB, rectB, 50, 50);

			if (rectA >= rectB || rectA < 10) {
				increment = -increment;
			}
			rectA += increment;
			rectB - +increment;
		}
		setTimeout(draw, 200)
	}
}

function startDraw() {
	goodToDraw = true;
	draw();
}

function stopDraw() {
	goodToDraw = false;
}