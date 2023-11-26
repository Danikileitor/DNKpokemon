client.init("localhost:3000");

function setup() {
  Screen.init();
  new rawImage("Characters", "boy_run");

  new imageSet("Tilesets", "Outside", 8, 502);

  new player();
}
function step() {
  for (let x = 0; x < 1920; x += 32) {
    for (let y = 0; y < 1080; y += 32) {
      var p = new position(null, x, y);
      imageSet.draw("Outside", p, 1, 0);
    }
  }
}