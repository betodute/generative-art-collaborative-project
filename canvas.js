const mainTitle = document.getElementById("mainTitle");
mainTitle.innerHTML = "JS Generative Art"

let circleBoom, extraCanvas, shapeRotate;


function setup () {
  createCanvas(windowWidth, windowHeight);

  extraCanvas = createGraphics(windowWidth, windowHeight);
  extraCanvas.clear();

  background(0)
};

function draw() {
 
  circleBoom = new CircleBoom();
  circleBoom.render();
  
  image(extraCanvas, 0, 0);
  shapeRotate = new ShapeRotate();
  extraCanvas.shapeRotate.render();
  
  
};

