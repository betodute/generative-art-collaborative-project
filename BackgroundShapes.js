class BackgroundShapes {
  constructor(backgroundShape) {
    this.x = random(700);
    this.y = random(700);
    
    this.blueToneR = random(0, 100);
    this.blueToneG = random(0, 125);
    this.blueToneB = random(150, 255);

    this.greenToneR = random(25, 180);
    this.greenToneG = random(125, 255);
    this.greenToneB = random(25, 240);

    this.yellowToneR = random(180, 255);
    this.yellowToneG = random(180, 255);
    this.yellowToneB = random(0, 255);

    this.backgroundShape = backgroundShape;
  };

  render() {
    graphicsLayer.noStroke();

    if (backgroundShape === "circle") {
      graphicsLayer.circle(this.x, this.y, 150);
      graphicsLayer.fill(this.blueToneR, this.blueToneG, this.blueToneB, 100);
    };

    if (backgroundShape === "triangle") {
      graphicsLayer.triangle(this.x - 125, this.y - 50, this.x - 25, this.y + 75, this.x + 75, this.y - 50)
      graphicsLayer.fill(this.greenToneR, this.greenToneG, this.greenToneB, 100);
    };

    if (backgroundShape === "square") {
      graphicsLayer.square(this.x - 100, this.y - 100, 150);
      graphicsLayer.fill(this.yellowToneR, this.yellowToneG, this.yellowToneB, 100);
    }

  };
};