client.init("localhost:3000");

function setup() {
  Screen.init();
  new rawImage("Characters", "boy_run");

  new imageSet("Tilesets", "Outside", 8, 501);

  new player();
}
function step() {
  var p = new position(null, 64, 64);
  imageSet.draw("Outside", p, 1, 0);
}