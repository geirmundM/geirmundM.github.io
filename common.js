// Creating navigation between the web pages
function loadNavigation() {
	var menu = "<a href=\"https://geirmundm.github.io/index.html\">Home</a>";
	menu = menu + " | <a href=\"https://geirmundm.github.io/firstorder.html\">First Order</a>";
	menu = menu + " | <a href=\"https://geirmundm.github.io/secondorder.html\">Second Order</a>";
	menu = menu + " | <a href=\"https://geirmundm.github.io/sinewave.html\">Sine Wave</a>";
	menu = menu + " | <a href=\"https://geirmundm.github.io/bode.html\">Bode Plot</a>";
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
// secondorder.html body onload event
function secondorder_onload() {
	loadNavigation();
	secondorderPlot();
}
// sinewave.html body onload event
function sinewave_onload() {
	loadNavigation();
	sinewaveInit();
}
// bode.html body onload event
function bode_onload() {
	loadNavigation();
	bodeInit();
}
// Axis for a plot
function addAxis(xPosition, yPosition, xLength, yLength, xText, yText) {
	var xPos = xPosition || 100;
	var yPos = yPosition || 250;
	var xLen = xLength || 350;
	var yLen = yLength || 225;
	var xTxt = xText || "";
	var yTxt = yText || "";
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
	// Name horizontal axis
	addText(xPos + xLen + 50, yPos, xTxt);
	// Name vertical axis
	addText(xPos, yPos - yLen - 25, yTxt);
}
// Adds a point, i.e. a circle
function addPoint(xPos, yPos) {
	var x = xPos || 150;
	var y = yPos || 150;
	var svg = document.getElementById('svg1');
	var e = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	e.setAttribute('cx', x);
	e.setAttribute('cy', y);
	e.setAttribute('r', 3);
	e.setAttribute('stroke', 'blue');
	e.setAttribute('stroke-width', 1);
	e.setAttribute('fill', 'blue');
	svg.appendChild(e);
}
// Axis for a plot
function addText(xPosition, yPosition, Text) {
	var xPos = xPosition || 100;
	var yPos = yPosition || 250;
	var txt = Text || "";
	var svg = document.getElementById('svg1');
	// Add svg text element
	var elm = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	elm.setAttribute('x', xPos);
	elm.setAttribute('y', yPos);
	elm.setAttribute('fill', 'black');
	elm.setAttribute('text-anchor', 'middle');
	elm.setAttribute('alignment-baseline', 'central');
	elm.innerHTML = txt;
	svg.appendChild(elm);
}