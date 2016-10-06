function firstorderPlot() {
	var xStart = 100;
	var yStart = 500;
	var xPos = 0;
	var yPos = 0;
	// axis
	addLine(xStart, yStart, 350, 0);
	addLine(xStart, yStart, 0, 225);
	// data: f(t) = K*(1 - e^(-at))
	for(var t = 0; t < 30; t++) {
		var res = 200 * (1 - Math.pow(Math.E, -0.10 * t));
		xPos = xStart + 10 * t;
		yPos = yStart - Math.floor(res);
		addCircle(xPos, yPos);
	}
}
function addCircle(xPos, yPos) {
	var svg = document.getElementById('svg1');
	var elm = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	elm.setAttribute('cx', xPos);
	elm.setAttribute('cy', yPos);
	elm.setAttribute('r', 2);
	svg.appendChild(elm);
	console.log("xPos: " + xPos + ", yPos: " + yPos);
}
function addLine(xPos, yPos, xLen, yLen) {
	var svg = document.getElementById('svg1');
	var elm = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	elm.setAttribute('x1', xPos);
	elm.setAttribute('y1', yPos);
	elm.setAttribute('x2', xPos + xLen);
	elm.setAttribute('y2', yPos - yLen);
	elm.setAttribute('stroke', 'black');
	elm.setAttribute('stroke-width', 2);
	svg.appendChild(elm);
}