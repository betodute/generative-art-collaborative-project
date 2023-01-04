let circleBackground, interactiveShapes, graphicsLayer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  graphicsLayer = createGraphics(windowWidth, windowHeight);
};

function draw() {
  background(0);
  image(graphicsLayer, 0, 0);

  circleBackground = new CircleBackground();
  circleBackground.render();

  interactiveShapes = new InteractiveShapes();
  interactiveShapes.render();
};