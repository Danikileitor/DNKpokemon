class userMovement {
  constructor(parent, pos, img) {
    this.parent = parent;
    this.img = img
    this.pos = pos;
    this.pos.x = this.pos.x - (this.pos.x % 32);
    this.pos.x = this.pos.y - (this.pos.y % 32);
    this.speed = 4;
    this.target = {
      x: this.pos.x,
      y: this.pos.y
    };
    this.moving = false;
    this.keys = {
      W: 87,
      A: 65,
      S: 83,
      D: 68
    };
  }
  step() {
    if (keyIsDown(this.keys.W) && !this.moving) {
      this.img.setY(3);
      this.moving = true;
      this.target.y -= 32;
    }
    if (keyIsDown(this.keys.A) && !this.moving) {
      this.img.setY(1);
      this.moving = true;
      this.target.x -= 32;
    }
    if (keyIsDown(this.keys.S) && !this.moving) {
      this.img.setY(0);
      this.moving = true;
      this.target.y += 32;
    }
    if (keyIsDown(this.keys.D) && !this.moving) {
      this.img.setY(2);
      this.moving = true;
      this.target.x += 32;
    }
    if (this.moving) {
      var distX = this.target.x - this.pos.x;
      var distY = this.target.y - this.pos.y;
      var dx = Math.sign(distX) * this.speed;
      var dy = Math.sign(distY) * this.speed;
      if (Math.abs(distX) <= this.speed && Math.abs(distY) <= this.speed) {
        this.pos.x = this.target.x;
        this.pos.y = this.target.y;
        this.img.setX(0);
        this.moving = false;
      } else {
        this.pos.x += dx;
        this.pos.y += dy;
        this.img.animateX();
      }
    }
  }
}