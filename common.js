// Creating navigation between the web pages
function loadNavigation() {
	var menu = "<a href=\"https://geirmundm.github.io/index.html\">Home</a>";
	menu = menu + " | <a href=\"https://geirmundm.github.io/firstorder.html\">First Order</a>";
	menu = menu + " | <a href=\"https://geirmundm.github.io/secondorder.html\">Second Order</a>";
	menu = menu + " | <a href=\"https://geirmundm.github.io/sinewave.html\">Sine Wave</a>";
	menu = menu + " | <a href=\"https://geirmundm.github.io/bode.html\">Bode Plot</a>";
	document.getElementById('nav1').innerHTML = menu;
}
function bodePlot(freqStart, decades) {
	// Setup plot area
	var xStart = 100;
	var yStart = 500;
	var xLength = 700;
	var yLength = 400;
	var fStart = Math.pow(10, Math.floor(Math.log10(freqStart)));
	// Data variables
	var xPos = 0;
	var yPos = 500;
	var freq = 0;
	var y = 0.0;
	var db = 0.0;	
	// Add axis
	addAxis(xStart, yStart, xLength, yLength, "Frequency", "Amplitude");
	// Vertical lines
	addHorizontal(xPos, yPos - yLength, xLength - 100);
	addHorizontal(xPos, yPos - yLength / 2, xLength - 100);
	// Horizontal lines
	for(var j = 0; j < decades; j++) {
		for(var i = 1; i < 10; i++) {
            // Calculate frequencies. Example: f = [10, 20, 30, ...100, ...1k, ...10k]
			freq = Math.pow(10, j) * fStart * (1 + i);
            // Calculate xPosition according to formula x = a + b * Math.log10(f)
			xPos = 100 + ((xLength - 100) / decades) * (Math.log10(freq / fStart));
			addVertical(xPos, yPos, yLength);
			console.log("Axis, xPos: " + Number(xPos).toFixed(1) + ", Frequency: " + Number(freq).toFixed(1));
		}
		addText(xPos, yPos + 25, freq);
	}
	// Adding points
	for(var j = 0; j < decades; j++) {
		for(var i = 1; i <= 10; i++) {
			freq = fStart * Math.pow(10, j) * Math.pow(10, i / 10);
			xPos = 100 + ((xLength - 100) / decades) * (Math.log10(freq / fStart));
            db = getAmplitudeDB(freq);
			addPoint(xPos, yStart - yLength - 10 * db);
			console.log("Data, xPos: " + Number(xPos).toFixed(1) + ", Frequency: " + Number(freq).toFixed(1), " y: " + Math.log10(freq) + ", db: " + Number(db).toFixed(3));
		}
	}
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
    addHorizontal(xPos, yPos, xLen, 2)
	// Vertical axis
    addVertical(xPos, yPos, yLen + 25, 2)
	// Name horizontal axis
	addText(xPos + xLen + 50, yPos, xTxt);
	// Name vertical axis
	addText(xPos, yPos - yLen - 50, yTxt);
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
function addVertical(xPos, yPos, len, thickness) {
	var x = xPos || 100;
	var y = yPos || 100;
	var l = len || 100;
    var t = thickness || 1;
	var svg = document.getElementById('svg1');
	var e = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	e.setAttribute('x1', x);
	e.setAttribute('y1', y);
	e.setAttribute('x2', x);
	e.setAttribute('y2', y - l);
	e.setAttribute('stroke', 'black');
	e.setAttribute('stroke-width', t);
	svg.appendChild(e);
}
function addHorizontal(xPos, yPos, len, thickness) {
	var x = xPos || 100;
	var y = yPos || 100;
	var l = len || 100;
    var t = thickness || 1;
	var svg = document.getElementById('svg1');
	var e = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	e.setAttribute('x1', x);
	e.setAttribute('y1', y);
	e.setAttribute('x2', x + l);
	e.setAttribute('y2', y);
	e.setAttribute('stroke', 'black');
	e.setAttribute('stroke-width', t);
	svg.appendChild(e);
}