class CircleBackground {
  constructor() {
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.circleButton = select("#circle-button");
    this.triangleButton = select("#triangle-button");
    this.hexButton = select("#hex-button");
  };

  render() {
    graphicsLayer.frameRate(10);
    graphicsLayer.noStroke();
    graphicsLayer.fill(this.r, this.g, this.b, 100);
    graphicsLayer.circle(this.x, this.y, 300);

    this.circleButton.mousePressed(() => {
      graphicsLayer.circle(this.x, this.y, 300)
    });

    this.triangleButton.mousePressed(() => {
      graphicsLayer.triangle(this.x, this.y, this.x + 25, this.y - 25, this.x + 5, this.y - 25)
    });
    

  };


};
