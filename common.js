// Creating navigation between the web pages
function loadNavigation() {
	var menu = "<a href=\"https://geirmundm.github.io/index.html\">Home</a>";
	menu = menu + " | <a href=\"https://geirmundm.github.io/firstorder.html\">First Order</a>";
	menu = menu + " | <a href=\"https://geirmundm.github.io/sinewave.html\">Sine Wave</a>";
	document.getElementById('nav1').innerHTML = menu;
}
// index.html body onload event
function index_onload() {
	loadNavigation();
}
// firstorder.html body onload event
function firstorder_onload() {
	loadNavigation();
	firstorderPlot();
}
// sinewave.html body onload event
function sinewave_onload() {
	loadNavigation();
	sinewaveInit();
}
// Axis for a plot
function addAxis(xPos, yPos, xLen, yLen) {
	var svg = document.getElementById('svg1');
	// Horizontal axis
	var elm1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	elm1.setAttribute('x1', xPos);
	elm1.setAttribute('y1', yPos);
	elm1.setAttribute('x2', xPos + xLen);
	elm1.setAttribute('y2', yPos);
	elm1.setAttribute('stroke', 'black');
	elm1.setAttribute('stroke-width', 2);
	svg.appendChild(elm1);
	// Vertical axis
	var elm2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	elm2.setAttribute('x1', xPos);
	elm2.setAttribute('y1', yPos);
	elm2.setAttribute('x2', xPos);
	elm2.setAttribute('y2', yPos - yLen);
	elm2.setAttribute('stroke', 'black');
	elm2.setAttribute('stroke-width', 2);
	svg.appendChild(elm2);
}
// Adds a point, i.e. a circle
function addPoint(xPos, yPos) {
	var x = xPos || 150;
	var y = yPos || 150;
	var svg = document.getElementById('svg1');
	var e = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	e.setAttribute('cx', x);
	e.setAttribute('cy', y);
	e.setAttribute('r', 2);
	svg.appendChild(e);
}