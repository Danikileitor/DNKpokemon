client.init("localhost:3000");

function setup() {
  Screen.init();
  new rawImage("Characters", "boy_run");

  new imageSet("Tilesets", "Outside", 8, 501);

  new player();
}
function step() {
}