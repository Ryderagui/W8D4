import Level from "./level";
import Bird from "./bird";

export default class FlappyBird {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart();
  }

  animate() {
    this.level.animate;
    this.bird.animate;  
  }

  restart () {
    this.level = new Level(this.dimesions);
    this.bird = new Bird(this.dimensions);
    this.animate()
    
  }
}