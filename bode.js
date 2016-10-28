function bodeInit() {
	bodePlot();
}

function bodePlot() {
	// H(s) = 500 / (s + 500)
	// Magnitude = 500 / sqrt(w2 + 250000)
	// Setup plot area
	var xStart = 100;
	var yStart = 500;
	var xLength = 700;
	var yLength = 400;
	// Data variables
	var xPos = 0;
	var yPos = 500;
	var freq = 0;
	var y = 0.0;
	var db = 0.0;	
	// Add axis
	addAxis(xStart, yStart, xLength, 50 + yLength, "Frequency", "Amplitude");
	//Vertical lines
	bodeVertical(xPos, yPos - yLength, xLength - 100);
	bodeVertical(xPos, yPos - yLength / 2, xLength - 100);
	//Horizontal lines
	for(var j = 0; j < 3; j++) {
		for(var i = 1; i < 10; i++) {
			freq = Math.pow(10, j) * (10 + 10 * i);
			xPos = 200 * (Math.log10(freq) - 1);
			y = 500 / Math.sqrt(freq * freq + 500 * 500);
			db = 20 * Math.log10(y);
			bodeHorizontal(100 + xPos, yPos, yLength);
			addPoint(100 + xPos, yStart - yLength - 10 * db);
			console.log("xPos: " + Number(xPos).toFixed(1) + ", Frequency: " + Number(freq).toFixed(1), " y: " + Math.log10(freq) + ", db: " + Number(db).toFixed(3));
		}
	}
}

function bodeHorizontal(xPos, yPos, len) {
	var x = xPos || 100;
	var y = yPos || 100;
	var l = len || 100;
	var svg = document.getElementById('svg1');
	var e = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	e.setAttribute('x1', x);
	e.setAttribute('y1', y);
	e.setAttribute('x2', x);
	e.setAttribute('y2', y - l);
	e.setAttribute('stroke', 'black');
	e.setAttribute('stroke-width', 1);
	svg.appendChild(e);
}
function bodeVertical(xPos, yPos, len) {
	var x = xPos || 100;
	var y = yPos || 100;
	var l = len || 100;
	var svg = document.getElementById('svg1');
	var e = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	e.setAttribute('x1', x);
	e.setAttribute('y1', y);
	e.setAttribute('x2', x + l);
	e.setAttribute('y2', y);
	e.setAttribute('stroke', 'black');
	e.setAttribute('stroke-width', 1);
	svg.appendChild(e);
}