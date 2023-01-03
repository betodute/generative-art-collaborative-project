class CircleBoom {
  constructor(){
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  };

  render() {
    frameRate(5)
    noStroke();
    fill(this.r, this.g, this.b, 100);
    circle(this.x, this.y, 100);
  };
  
};
