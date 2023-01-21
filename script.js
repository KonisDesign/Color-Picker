let r = 0;
let g = 0;
let b = 0;
let hex1;
let hex2;
let hex3;
let hex4;

function random(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function picker() {
    r = random(256, 130);
    g = random(256, 130);
    b = random(256, 130);
    document.getElementById('color4').style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById('round4').style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById('hex4').innerHTML = "<p>#" + fullColorHex(r, g, b) + "</p";
    document.getElementById('rgb4').innerHTML = "<p>rgb(" + r + ", " + g + ", " + b + ")</p>";

    let color = 0;
    let i = 3;
    while (i != 0) {
        if (r > g && r > b) {
            color = r;
            r = random(color, 0);
            g = random(r, 0);
            b = random(r, 0);
        } else if (g > r && g > b) {
            color = g;
            g = random(color, 0);
            r = random(g, 0);
            b = random(g, 0);
        } else if (b > r && b > g) {
            color = b;
            b = random(color, 0);
            r = random(b, 0);
            g = random(b, 0);
        }
        document.getElementById('color' + i).style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById('round' + i).style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById('hex' + i).innerHTML = "<p>#" + fullColorHex(r, g, b) + "</p";
        document.getElementById('rgb' + i).innerHTML = "<p>rgb(" + r + ", " + g + ", " + b + ")</p>"
        i--;
    }
}

function rgbToHex(rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
};

function fullColorHex(r, g, b) {
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return red + green + blue;
};
