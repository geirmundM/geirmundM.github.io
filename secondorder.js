function secondorderPlot() {
    // Initial
    var freqStart = 1;
    var decades = 3;
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
	addAxis(xStart, yStart, xLength, 50 + yLength, "Frequency", "Amplitude");
	// Vertical lines
	bodeVertical(xPos, yPos - yLength, xLength - 100);
	bodeVertical(xPos, yPos - yLength / 2, xLength - 100);
	// Horizontal lines
	for(var j = 0; j < decades; j++) {
		for(var i = 1; i < 10; i++) {
			freq = Math.pow(10, j) * fStart * (1 + i); // f = [10, 20, 30, ...100, ...1k, ...10k]
			xPos = 100 + ((xLength - 100) / decades) * (Math.log10(freq / fStart));
			bodeHorizontal(xPos, yPos, yLength);
			console.log("Axis, xPos: " + Number(xPos).toFixed(1) + ", Frequency: " + Number(freq).toFixed(1));
		}
		addText(xPos, yPos + 25, freq);
	}
	// Adding points
	for(var j = 0; j < decades; j++) {
		for(var i = 1; i <= 10; i++) {
			freq = fStart * Math.pow(10, j) * Math.pow(10, i / 10);
			xPos = 100 + ((xLength - 100) / decades) * (Math.log10(freq / fStart));
			amp = 160000 / (Math.sqrt((160000 + freq*freq)*(160000 + freq*freq) + (800*freq)*(800*freq)));
			db = 20 * Math.log10(amp);
			addPoint(xPos, yStart - yLength - 10 * db);
			console.log("Data, xPos: " + Number(xPos).toFixed(1) + ", Frequency: " + Number(freq).toFixed(1), " y: " + Math.log10(freq) + ", db: " + Number(db).toFixed(3));
		}
	}
}
