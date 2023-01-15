let circleBackground, interactiveShapes, graphicsLayer;
let button, triangleButton, circleButton, squareButton;
let backgroundShape;

const shape = {
  rect: 'rect',
  circle: 'circle',
  triangle: 'triangle',
}

let currentShape = shape.rect;

if (!backgroundShape) {
  backgroundShape = "circle";
};


function setup() {
  let canvas = createCanvas(700, 450);
  canvas.parent("p5-canvas");
  graphicsLayer = createGraphics(700, 450);
  frameRate(5);
  
  circleButton = select("#circle-button");
  triangleButton = select("#triangle-button");
  squareButton = select("#square-button");

  circleButton.mousePressed(() => {
    backgroundShape = "circle"
  });

  triangleButton.mousePressed(() => {
    backgroundShape = "triangle"
  });
  
  squareButton.mousePressed(() => {
    backgroundShape = "square"
  });

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
  
  frameRate(5);
  background(0);
  image(graphicsLayer, 0, 0);

  circleBackground = new CircleBackground(backgroundShape);
  circleBackground.render();
  
  interactiveShapes = new InteractiveShapes();
  interactiveShapes.render();
}