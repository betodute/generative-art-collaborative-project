let circleBackground, interactiveShapes, graphicsLayer;
let button, triangleButton, circleButton, squareButton;
let backgroundShape;

circleButton = select("#circle-button");
triangleButton = select("#triangle-button");
squareButton = select("#square-button");

const shape = {
  rect: 'rect',
  circle: 'circle',
  triangle: 'triangle',
}

let currentShape = shape.rect;

circleButton.mousePressed(() => {
  backgroundShape = "circle"
});

triangleButton.mousePressed(() => {
  backgroundShape = "triangle"
});

squareButton.mousePressed(() => {
  backgroundShape = "square"
});

if (!backgroundShape) {
  backgroundShape = "circle";
};


function setup() {
  let canvas = createCanvas(700, 450);
  canvas.parent("p5-canvas");
  graphicsLayer = createGraphics(700, 450);
  

  button = select("#shape-button");
  button.mousePressed(changeShape);
};

function changeShape() {
  switch (currentShape) {
    case shape.rect:
      currentShape = shape.circle;
      break;
    case shape.circle:
      currentShape = shape.triangle;
      break;
    case shape.triangle:
      currentShape = shape.rect;
      break;
  }
};

function draw() {
  background(0)
  image(graphicsLayer, 0, 0);

  circleBackground = new CircleBackground(backgroundShape);
  circleBackground.render();

  interactiveShapes = new InteractiveShapes();
  interactiveShapes.render();
};