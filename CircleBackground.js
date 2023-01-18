class CircleBackground {
  constructor(selectedShape) {
    this.x = random(700);
    this.y = random(450);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.blueToneR = random(0, 2);
    this.blueToneG = random(0, 25);
    this.blueToneB = random(100, 200);
    this.redToneR = random(255);
    this.redToneG = random(255);
    this.redToneB = random(255);
    this.selectedShape = selectedShape;
  };

  render() {
    
    graphicsLayer.noStroke();
    console.log(this.blueToneR, this.blueToneG, this.blueToneB)

    if (this.selectedShape === "circle") {
      graphicsLayer.circle(this.x, this.y, 200);
      graphicsLayer.fill(this.blueToneR, this.blueToneG, this.blueToneB, 100);
    };

    if (this.selectedShape === "triangle") {
      graphicsLayer.triangle(this.x - 100, this.y, this.x + 100, this.y - 100, this.x + 200, this.y)
      graphicsLayer.fill(this.r, this.g, this.b, 100);
    };

    if (this.selectedShape === "square") {
      graphicsLayer.square(this.x - 100, this.y - 100, 200);
      graphicsLayer.fill(this.r, this.g, this.b, 100);
    }

  };


};
