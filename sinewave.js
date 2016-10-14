var x = 0;
var yValues = [];
function sinewaveInit() {
	addPoint();
	setInterval(main, 250);
}
function main() {
	createValues();
	plotValues();
}
function createValues() {
	var maxLength = 60;
	var y = 150 - 50 * Math.sin(2 * Math.PI * 0.05 * x);
	if(yValues.length < maxLength) {
		yValues.push(y)
	}
	else {
		for(var i = 0; i < (maxLength - 1); i++) {
			yValues[i] = yValues[i+1];
		}
		yValues[maxLength - 1] = y;
	}
	x = x + 1;
}
function plotValues() {
	var xStart = 100;
	var yStart = 250;
	// Remove old points in plot
	var parent = document.getElementById('svg1');
	var child = parent.firstChild;
	while(child) {
		parent.removeChild(child);
		child = parent.firstChild;
	}	
	// Add axis 
	addAxis(xStart, yStart, 350, 225); 	// function addAxis(xPos, yPos, xLen, yLen)
	// Add new points in plot
	for(var i = 0; i < yValues.length; i++) {
		addPoint(xStart + 5 * i, yValues[i]);
	}
}
