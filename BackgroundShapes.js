class BackgroundShapes {
  constructor(backgroundShape) {
    // Randomly selects location and shape color tone
    this.x = random(windowWidth);
    this.y = random(800);

    this.blueToneR = random(0, 100);
    this.blueToneG = random(0, 125);
    this.blueToneB = random(150, 255);

    this.greenToneR = random(25, 170);
    this.greenToneG = random(125, 255);
    this.greenToneB = random(25, 200);

    this.yellowToneR = random(180, 230);
    this.yellowToneG = random(180, 255);
    this.yellowToneB = random(50, 110);
  };

  render() {
    // Slower framerate for less chaotic looking background
    frameRate(5);
    graphicsLayer.noStroke();

    // Creates background shapes based on button pushed
    if (backgroundShape === "circle") {
      let circleSize;
      if (windowWidth < 600) {
        circleSize = random(10, 50);
      } else {
        circleSize = random(50, 150);
      }
      graphicsLayer.fill(this.blueToneR, this.blueToneG, this.blueToneB, 150);
      graphicsLayer.circle(this.x, this.y, circleSize);
    }

    if (backgroundShape === "triangle") {
      let triDirection = Math.floor(random(1,5));
      graphicsLayer.fill(this.greenToneR, this.greenToneG, this.greenToneB, 150);
       
      // Four possible directions for the triangle
      if (triDirection === 1) {
        graphicsLayer.triangle(this.x - 125, this.y - 50, this.x + 75, this.y - 50, this.x - 25, this.y - 200);
      };
      if (triDirection === 2) {
        graphicsLayer.triangle(this.x - 125, this.y - 50, this.x - 125, this.y + 150, this.x + 25, this.y + 50);
      };
      if (triDirection === 3) {
        graphicsLayer.triangle(this.x - 125, this.y - 50, this.x + 75, this.y - 50, this.x - 25, this.y + 100);
      };
      if (triDirection === 4) {
        graphicsLayer.triangle(this.x + 125, this.y - 0, this.x + 125, this.y - 200, this.x - 25, this.y - 100);
      };
    };

    // Three nested squares as a single BackgroundShapes square object
    if (backgroundShape === "square") {
      let squareSize = 150;
      while (squareSize >= 50) {
        graphicsLayer.fill(this.yellowToneR, this.yellowToneG, this.yellowToneB, 150);
        graphicsLayer.square(this.x - 100, this.y - 100, squareSize);
        this.x += 25
        this.y += 25
        this.yellowToneR -= 25
        this.yellowToneG -= 25
        this.yellowToneB -= 25
        squareSize -= 50
      }
    };

  };
};