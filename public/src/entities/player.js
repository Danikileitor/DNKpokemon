class player {
  constructor() {
    this.pos = new position(this, 300, 300);
    this.img = new animator(this, this.pos, "boy_run", 4, 4, 0.1);
    this.controller = new userMovement(this, this.pos, this.img);

    this.properties = [
      this.pos,
      this.img,
      this.controller
    ];
    objects.push(this);
  }
}