class CircleBackground {
  constructor() {
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  };

  render() {
    graphicsLayer.frameRate(30);
    graphicsLayer.noStroke();
    graphicsLayer.fill(this.r, this.g, this.b, 100);
    graphicsLayer.circle(this.x, this.y, 100);
  };

};
