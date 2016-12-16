// bode.html window onload event
window.onload = function() {
	loadNavigation();
	bodePlot(10, 3);
}
// H(s) = 500 / (s + 500)
// Magnitude = 500 / sqrt(w2 + 250000)
function getAmplitudeDB(freq) {
    var f = freq || 1;
    var db = 0.0;
    var y = 0.0;
    y = 500 / Math.sqrt(freq * freq + 500 * 500);
    db = 20 * Math.log10(y);
    return db;
}