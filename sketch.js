
starNum = 1600;

const stars = [];

function setup() {
  const p = createP('Starfield');
  const div = createDiv();
  const canvas = createCanvas(800, 800);
  div.child(p);
  div.child(canvas);
  for (let i = 0; i < starNum; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  background(0);
  translate(width * 0.5, height * 0.5);
  for (let i = 0; i < starNum; i++) {
    stars[i].update();
    stars[i].show();
  }
}

class Star {
  constructor (){
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.z = random(width);
  }

  update() {
    this.z -= 7;
    this.rad = map(this.z, 0, width, 8, 0.1);
    if (this.z < 1) {
      this.z = width;
      this.rad = 1;
      this.x = random(-width, width);
      this.y = random(-height, height);
    }
  }

  show() {
      fill(255);
      noStroke();

      let sx = map(this.x / this.z, 0, 1, 0, width);
      let sy = map(this.y / this.z, 0, 1, 0, height);
      
      circle(sx, sy, this.rad);
  }
}