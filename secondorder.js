function secondorderPlot() {
	var xStart = 100;
	var yStart = 500;
	var xPos = 0;
	var yPos = 0;
	var freq = 0;
	var amp = 0;
	var db = 0;
	// Add axis
	//addAxis(100, 500, 350, 225, "Time", "Amplitude");
	// generate data
	for(var j = 0; j < 4; j++) {
		for(var i = 1; i <= 10; i++) {
			freq = Math.pow(10, i/10) * Math.pow(10, j);
			amp = 160000 / (Math.sqrt((160000 + freq*freq)*(160000 + freq*freq) + (800*freq)*(800*freq)));
			db = 20 * Math.log10(amp);
			console.log("freq = " + freq + ", amp = " + amp + ", db = " + db);
		}
	}
}
