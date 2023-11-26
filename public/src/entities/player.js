class player {
  constructor() {
    this.pos = new position(this, 300, 300);
    this.img = new animator(this, this.pos, "boy_run", 4, 4);

    this.properties = [
      this.pos,
      this.img
    ];

    objects.push(this);
  }
}