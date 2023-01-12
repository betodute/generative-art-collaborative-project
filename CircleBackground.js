class CircleBackground {
  constructor() {
    this.x = random(700);
    this.y = random(450);
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
      graphicsLayer.circle(this.x, this.y, 200)
      graphicsLayer.fill(this.r, this.g, this.b, 100);
    });

    this.triangleButton.mousePressed(() => {
      graphicsLayer.triangle(this.x - 100, this.y, this.x + 100, this.y - 100, this.x + 200, this.y)
      graphicsLayer.fill(this.r, this.g, this.b, 100);
    });
    
    this.squareButton.mousePressed(() => {
      graphicsLayer.square(this.x - 100, this.y - 100, 200);
      graphicsLayer.fill(this.r, this.g, this.b, 100);
    })

  };
 


};
