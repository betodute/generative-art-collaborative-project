let circleBackground, interactiveShapes, graphicsLayer;
let button, fgTriangleButton, fgCircleButton, fgSquareButton, bgTriangleButton, bgCircleButton, bgSquareButton;
let backgroundShape, foregroundShape;

// const shape = {
//   rect: 'rect',
//   circle: 'circle',
//   triangle: 'triangle',
// }

// let currentShape = shape.rect;

if (!backgroundShape) {
  backgroundShape = "circle";
};

if (!foregroundShape) {
  foregroundShape = "circle";
};


function setup() {
  let canvas = createCanvas(700, 450);
  canvas.parent("p5-canvas");
  graphicsLayer = createGraphics(700, 450);
  frameRate(5);

  fgCircleButton = select("#fg-circle-button");
  fgTriangleButton = select("#fg-triangle-button");
  fgSquareButton = select("#fg-square-button");

  fgCircleButton.mousePressed(() => {
    foregroundShape = "circle"
  });

  fgTriangleButton.mousePressed(() => {
    foregroundShape = "triangle"
  });

  fgSquareButton.mousePressed(() => {
    foregroundShape = "square"
  });

  bgCircleButton = select("#bg-circle-button");
  bgTriangleButton = select("#bg-triangle-button");
  bgSquareButton = select("#bg-square-button");

  bgCircleButton.mousePressed(() => {
    backgroundShape = "circle"
  });

  bgTriangleButton.mousePressed(() => {
    backgroundShape = "triangle"
  });

  bgSquareButton.mousePressed(() => {
    backgroundShape = "square"
  });

  // button = select("#shape-button");
  // button.mousePressed(changeShape);
};

// function changeShape() {
//   switch (currentShape) {
//     case shape.rect:
//       currentShape = shape.circle;
//       break;
//     case shape.circle:
//       currentShape = shape.triangle;
//       break;
//     case shape.triangle:
//       currentShape = shape.rect;
//       break;
//   }
// };

function draw() {

  frameRate(5);
  background(0);
  image(graphicsLayer, 0, 0);

  circleBackground = new CircleBackground(backgroundShape);
  circleBackground.render();

  interactiveShapes = new InteractiveShapes(foregroundShape);
  interactiveShapes.render();
}