let circleBackground, interactiveShapes, graphicsLayer;
let button;
const shape = {
  rect: 'rect',
  circle: 'circle',
  triangle: 'triangle',
}
let currentShape = shape.rect;

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent("p5-canvas");
  graphicsLayer = createGraphics(500, 500);
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
  background(0);

  image(graphicsLayer, 0, 0);

  circleBackground = new CircleBackground();
  circleBackground.render();

  interactiveShapes = new InteractiveShapes();
  interactiveShapes.render();
};