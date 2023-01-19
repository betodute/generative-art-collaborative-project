let backgroundShapes, foregroundShapes, backgroundShape, foregroundShape, graphicsLayer;
let circleButton, triangleButton, squareButton;

const toggleSwitch = document.getElementById("toggle-switch");
let toggleStatus = false;

toggleSwitch.addEventListener("change", function () {
  if (toggleSwitch.checked) {
    toggleStatus = true;
  } else {
    toggleStatus = false;
  }
})

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

function draw() {
  background(0);
  image(graphicsLayer, 0, 0);

  backgroundShapes = new BackgroundShapes(backgroundShape);
  backgroundShapes.render();

  foregroundShapes = new ForegroundShapes(foregroundShape, backgroundShape);
  foregroundShapes.render();
}