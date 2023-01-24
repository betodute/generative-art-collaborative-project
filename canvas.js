let backgroundShapes, foregroundShapes, backgroundShape, foregroundShape
let canvas, graphicsLayer;
let circleButton, triangleButton, squareButton;

// toggle switch
const toggleSwitch = document.getElementById("toggle-switch");
let toggleStatus = false;
toggleSwitch.addEventListener("change", function () {
  if (toggleSwitch.checked) {
    toggleStatus = true;
  } else {
    toggleStatus = false;
  }
})

// default to circle
if (!backgroundShape) {
  backgroundShape = "circle";
};
if (!foregroundShape) {
  foregroundShape = "circle";
};

function setup() {
  // smart phone responsive canvas and graphic layer
  if (windowWidth < 576) {
    canvas = createCanvas(windowWidth - 50, 400);
    graphicsLayer = createGraphics(windowWidth, 400);
  }
  else {
    canvas = createCanvas(windowWidth - 150, 600);
    graphicsLayer = createGraphics(windowWidth, 600);
  }

  canvas.parent("p5-canvas");

  // shape buttons response
  circleButton = select("#circle-button");
  triangleButton = select("#triangle-button");
  squareButton = select("#square-button");

  circleButton.mousePressed(() => {
    if (toggleStatus == false) {
      backgroundShape = "circle";
    } else if (toggleStatus == true) {
      foregroundShape = "circle";
    }
  });

  triangleButton.mousePressed(() => {
    if (toggleStatus == false) {
      backgroundShape = "triangle";
    } else if (toggleStatus == true) {
      foregroundShape = "triangle";
    }
  });

  squareButton.mousePressed(() => {
    if (toggleStatus == false) {
      backgroundShape = "square";
    } else if (toggleStatus == true) {
      foregroundShape = "square";
    }
  });
};

// resize canvas on window resize with shorten canvas for smart phone
function windowResized() {
  if (windowWidth < 576) {
    resizeCanvas(windowWidth - 50, 400);
    graphicsLayer.resizeCanvas(windowWidth, 400);
  }
  else {
    resizeCanvas(windowWidth - 150, 600);
    graphicsLayer.resizeCanvas(windowWidth, 600);
  }
}

function draw() {
  background(0);
  image(graphicsLayer, 0, 0);

  // create class instance of background and foreground shapes
  backgroundShapes = new BackgroundShapes(backgroundShape);
  backgroundShapes.render();

  foregroundShapes = new ForegroundShapes(foregroundShape, backgroundShape);
  foregroundShapes.render();
}