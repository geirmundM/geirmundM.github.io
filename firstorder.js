function firstorderPlot() {
	var xStart = 100;
	var yStart = 500;
	var xPos = 0;
	var yPos = 0;
	// Add axis
	addAxis(100, 500, 350, 225, "Time", "Amplitude");
	// data: f(t) = K*(1 - e^(-at))
	for(var t = 0; t < 30; t++) {
		var res = 200 * (1 - Math.pow(Math.E, -0.10 * t));
		xPos = xStart + 10 * t;
		yPos = yStart - Math.floor(res);
		addPoint(xPos, yPos);
	}
}
