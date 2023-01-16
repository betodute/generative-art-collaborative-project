let backgroundShapes, foregroundShapes, backgroundShape, foregroundShape, graphicsLayer;
let bgTriangleButton, bgCircleButton, bgSquareButton, fgTriangleButton, fgCircleButton, fgSquareButton;

if (!backgroundShape) {
  backgroundShape = "circle";
};

if (!foregroundShape) {
  foregroundShape = "circle";
};


function setup() {
  let canvas = createCanvas(700, 700);
  canvas.parent("p5-canvas");
  graphicsLayer = createGraphics(700, 700);
  frameRate(5);

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
};

function draw() {
  frameRate(5);
  background(0);
  image(graphicsLayer, 0, 0);

  backgroundShapes = new BackgroundShapes(backgroundShape);
  backgroundShapes.render();

  foregroundShapes = new ForegroundShapes(foregroundShape);
  foregroundShapes.render();
}