var rawMaps = {};

class rawMap {
    constructor(file, name) {
        if (!name) {
            name = file;
            file = "";
        } else file += "/";
        this.file = file;
        this.name = name;
        this.loaded = false;
        this.raw = loadJSON("res/Maps/" + file + name + ".json", () => {
            this.loaded = true;
        });
        rawMaps[name] = this;
    }
}

function drawMap(name) {
    var map = rawMaps[name];
    if (!map.loaded) return;
    for (let x = 0; x < 1920; x += 32) {
        for (let y = 0; y < 1080; y += 32) {
            var p = new position(null, x, y);
            imageSet.draw(map.raw["tileset"], p, map.raw["backgroundTile"].x, map.raw["backgroundTile"].y);
        }
    }
}