class CircleBackground {
  constructor() {
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  };

  render() {
    layer2.frameRate(30);
    layer2.noStroke();
    layer2.fill(this.r, this.g, this.b, 100);
    layer2.circle(this.x, this.y, 100);
  };

};
