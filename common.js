// Creating navigation between the web pages
function loadNavigation() {
	var menu = "<a href=\"https://geirmundm.github.io/index.html\">Home</a>";
	menu = menu + " | <a href=\"https://geirmundm.github.io/firstorder.html\">First Order</a>";
	document.getElementById('nav1').innerHTML = menu;
}
// index.html body onload event
function index_onload() {
	loadNavigation();
}
// firstorder.html body onload event
function firstorder_onload() {
	loadNavigation();
	firstorderMain();
}