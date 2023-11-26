class player {
  constructor() {
    this.pos = new position(this, 300, 300);
    this.img = new graphics(this, this.pos, "boy_run");

    this.properties = [
      this.pos,
      this.img
    ];

    objects.push(this);
  }
}