// secondorder.html window onload event
window.onload = function() {
	loadNavigation();
	bodePlot(1, 3);
}
// H(s) = 160 000 / (s*s + 800s + 160 000)
// Magnitude = ...
function getAmplitudeDB(freq) {
    var f = freq || 1;
    var db = 0.0;
    var y = 0.0;
    y = 160000 / (Math.sqrt((160000 + f * f)*(160000 + f * f) + (800 * f) * (800 * f)));
    db = 20 * Math.log10(y);
    return db;
}
