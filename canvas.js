const mainTitle = document.getElementById("mainTitle");
mainTitle.innerHTML = "Beto's Base Case"

let points = [];
let pointsLimit = 50;

function setup () {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  for (let i=0; i<pointsLimit; i++) {
    let coord = createVector(width/2, height/2);
    points.push(coord);
  };
};

function draw() {
  background('#147fd6');

  if (mouseX !== pmouseX && mouseY !== pmouseY) {
    points.shift();
    let coord = createVector(mouseX, mouseY);
    points.push(coord);
  };

  strokeWeight(10);
  strokeJoin(ROUND);
  noFill();

  let c1 = color('#20e435')
  let c2 = color('#ed26d9')
  
  for (let i=1; i<points.length; i++) {
    let howFar = map(i, 1,points.length, 0,1);
    let custColor = lerpColor(c1, c2, howFar)
    let prev = points[i-1];
    let curr = points[i];
    stroke(custColor);
    line(prev.x, prev.y, curr.x, curr.y);
  }
  

  
}

