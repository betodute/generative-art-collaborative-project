class CircleBackground {
  constructor() {
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.circleButton = select("#circle-button");
    this.triangleButton = select("#triangle-button");
    this.squareButton = select("#square-button");
  };

  render() {

    graphicsLayer.frameRate(10)
    graphicsLayer.noStroke();

    this.circleButton.mousePressed(() => {
      graphicsLayer.frameRate(10);
      graphicsLayer.fill(this.r, this.g, this.b, 100);
      graphicsLayer.circle(this.x, this.y, 200)
    });

    this.triangleButton.mousePressed(() => {
      graphicsLayer.frameRate(10);
      graphicsLayer.fill(this.r, this.g, this.b, 100);
      graphicsLayer.triangle(this.x, this.y, this.x + 100, this.y - 100, this.x + 50, this.y - 150)
    });
    
    this.squareButton.mousePressed(() => {
      graphicsLayer.frameRate(10);
      graphicsLayer.fill(this.r, this.g, this.b, 100);
      graphicsLayer.square(this.x, this.y, 200);
    })

  };
 


};
