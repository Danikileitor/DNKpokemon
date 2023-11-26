client.init("localhost:3000");

function setup() {
  Screen.init();
  new rawImage("Characters", "boy_run");

  new imageSet("Tilesets", "Outside", 8, 502);
  new rawMap("test", "testMap");

  new player();
}
function step() {
  drawMap("testMap");
}