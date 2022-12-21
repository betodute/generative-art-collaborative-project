const mainTitle = document.getElementById("mainTitle");
mainTitle.innerHTML = "Beto's Base Case"

let mover, walker, circleBoom;


function setup () {
  background('#147fd6')
  createCanvas(500, 400);
  noCursor();

  walker = new Walker();
  mover = new Mover(); 
};

function draw() {

  mover.update();
  mover.checkEdges();
  mover.display();

  walker.step();
  walker.render();

  circleBoom = new CircleBoom();
  circleBoom.render();
}

