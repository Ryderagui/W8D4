import FlappyBird from './game';

export default class Bird {
    constructor(dimesions) {
        this.dimesions = dimesions;
        this.velocity = 0;
        this.positionVert = dimensions.height / 2;
        this.positionHorizontal = dimesions.width / 3;
    }

    drawBird(ctx) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.positionHorizontal, this.positionVert, 40, 30);
    }

    animate(ctx) {
        this.drawBird(ctx);
    }
}