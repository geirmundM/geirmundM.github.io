function draw() {
    // Getting data from form
    var title = document.getElementById('title').value;
    var bars = document.getElementById('bars').value;
    var sheetType = document.querySelector('input[name="sheet"]:checked').value;
    // Replace form element by top level svg
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('id', 'svg1');
    svg.setAttribute('width', 1200);
    svg.setAttribute('height', 1600);
    document.getElementById('div1').innerHTML = "";
    document.getElementById('div1').appendChild(svg);
    // Create the sheet
    addText(300, 50, title, 'musicText');
    if(sheetType == 'note') {
        for(var j = 0; j < 6; j++) {
            for(var i = 0; i < 5; i++) {
                addHorizontal(100, 100 + i * 25  +   j * 250, 900);
            }
            addVertical(100, 200 + j * 250, 100);
            for(var k = 1; k <= bars; k++) {
                addVertical(200 + k * 800 / bars, 200 + j * 250, 100);
            }
        }
    }
    else if(sheetType == 'tab') {
        for(var j = 0; j < 6; j++) {
            for(var i = 0; i < 6; i++) {
                addHorizontal(100, 100 + i * 25  +   j * 250, 900);
            }
            addVertical(100, 225 + j * 250, 125);
            for(var k = 1; k <= bars; k++) {
                addVertical(200 + k * 800 / bars, 225 + j * 250, 125);
            }
        }    
    }
    else {
        for(var j = 0; j < 6; j++) {
            for(var i = 0; i < 6; i++) {
                addHorizontal(100, 100 + i * 25  +   j * 250, 900);
            }
            addVertical(100, 225 + j * 250, 125);
            addVertical(105, 225 + j * 250, 125);
            for(var k = 1; k <= 9; k++) {
                addVertical(100 + k * 100, 225 + j * 250, 125);
            }
            addPoint(350, 163 + j * 250);
            addPoint(550, 163 + j * 250);
            addPoint(750, 163 + j * 250);
            addPoint(950, 163 + j * 250);
        }
    }
}

