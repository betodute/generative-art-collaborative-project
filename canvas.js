const mainTitle = document.getElementById("mainTitle");
mainTitle.innerHTML = "JS Generative Art"

let circleBoom, extraCanvas, shapeRotate;


function setup () {
  createCanvas(windowWidth, windowHeight);
  layer2 = createGraphics(windowWidth, windowHeight);
  background(0)
};

function draw() {
  background(0);
  image(layer2, 0, 0);
 

  circleBoom = new CircleBoom();
  circleBoom.render();

  shapeRotate = new ShapeRotate();
  shapeRotate.render();
};

