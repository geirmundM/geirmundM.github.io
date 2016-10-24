function bode_onload() {
	bodePlot();
}

function bodePlot() {
	var xPos = 100;
	var yPos = 500;
	var xLen = 400;
	var yLen = 300;
	var length = 300;
	var freq = 0;
	var y = 0.0;
	var db = 0.0;
	
	// H(s) = 500 / (s + 500)
	// Magnitude = 500 / sqrt(w2 + 250000)
	
	//Horizontal lines
	for(var j = 0; j < 3; j++) {
		for(var i = 1; i < 10; i++) {
			freq = Math.pow(10, j) * (10 + 10 * i);
			xPos = 200 * (Math.log10(freq)- 1);
			y = 500 / Math.sqrt(freq * freq + 500 * 500);
			db = 20 * Math.log10(y);
			bodeHorizontal(xPos, yPos, length);
			addPoint(xPos, 300 - 10 * db);
			console.log("Frequency: " + freq, " y: " + Math.log10(freq) + ", db: " + db);
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