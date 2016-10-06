function firstorderMain() {
	// axis
	addLine(250, 250, 500, 0);
	addLine(250, 250, 0, 250);
	// data: f(t) = K*(1 - e^(-at))
	for(var t = 0; t <= 30; t++) {
		var res = 200 * (1 - Math.pow(Math.E, -0.10 * t));
		addCircle(10 * t, Math.floor(res));
		console.log('t: ' + t + ', res: ' + res);
	}
}
function addCircle(xPos, yPos) {
	var xStart = 250;
	var yStart = 250;
	var svg = document.getElementById('svg1');
	var elm = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	elm.setAttribute('cx', xStart + xPos);
	elm.setAttribute('cy', yStart - yPos);
	elm.setAttribute('r', 2);
	svg.appendChild(elm);
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