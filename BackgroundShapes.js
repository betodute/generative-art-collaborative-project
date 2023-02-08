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

    this.yellowToneR = random(180, 255);
    this.yellowToneG = random(180, 255);
    this.yellowToneB = random(0, 255);
  };

  render() {
    // Slower framerate for less chaotic looking background
    frameRate(5);
    graphicsLayer.noStroke();

    // Creates background shapes based on button pushed
    if (backgroundShape === "circle") {
      // Circles range in size from 50 to 150
      let circleSize = random(50, 150)
      graphicsLayer.fill(this.blueToneR, this.blueToneG, this.blueToneB, 150);
      graphicsLayer.circle(this.x, this.y, circleSize);
    };

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

    if (backgroundShape === "square") {
      graphicsLayer.fill(this.yellowToneR, this.yellowToneG, this.yellowToneB, 150);
      graphicsLayer.square(this.x - 100, this.y - 100, 150);
    };

  };
};