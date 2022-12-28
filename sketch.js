const mainTitle = document.getElementById("mainTitle");
mainTitle.innerHTML = "JS Generative Art"

let layer1, layer2;
let width = 500;
let length = 500;

function setup() {
    layer1 = createCanvas(width, length);
    layer2 = createGraphics(width, length);
    frameRate(30);
}

function draw() {
    background('#000000');

    let x = random(width);
    let y = random(length);
    let r = random(255);
    let g = random(255);
    let b = random(255);
    image(layer2, 0, 0);
    layer2.noStroke();
    layer2.fill(r, g, b, 100);
    layer2.circle(x, y, 100);

    rectMode(CENTER);
    stroke(255, 50);
    noStroke();
    fill(0, 0, 0, 255);

    var ang1 = TWO_PI * noise(0.01 * frameCount + 10) + mouseX / 100;
    var ang2 = TWO_PI * noise(0.01 * frameCount + 20) + mouseY / 100;
    var ang3 = TWO_PI * noise(0.01 * frameCount + 30) + (mouseX + mouseY) / 100;
    var rx = 60 * noise(0.01 * frameCount + 40);
    var tx = 200 * noise(0.01 * frameCount + 50);
    var size1 = 300 * noise(0.01 * frameCount + 60);
    var size2 = 100 * noise(0.01 * frameCount + 60);

    translate(width / 2, height / 2);
    for (var i = 0; i < 8; i++) {
        push();
        rotate(ang1 + TWO_PI * i / 8);
        translate(tx, 0);
        rect(0, 0, size1, size1);
        for (var j = 0; j < 6; j++) {
            push();
            rotate(ang2 + TWO_PI * j / 6);
            translate(rx, 0);
            rotate(ang3);
            rect(rx, 0, size2, size2);
            pop();
        }
        translate()
        pop();
    }
}