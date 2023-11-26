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
        this.raw = loadJSON("res/Maps/" + file + name + ".json", (data) => {
            this.data = data;
            this.tileset = data["tileset"].substring(0, data["tileset"].length-4);
            this.backgroundTile = data["backgroundTile"];
            this.loaded = true;
        });
        rawMaps[name] = this;
    }
}

function drawMap(name) {
    var map = rawMaps[name];
    if (!map.loaded) return;
    for (let x = 0; x < width; x += 32) {
        for (let y = 0; y < height; y += 32) {
            var p = new position(null, x, y);
            imageSet.draw(map.tileset, p, map.backgroundTile.x, map.backgroundTile.y);
        }
    }
    drawMapLayer(map, "layer1");
    drawMapLayer(map, "layer2");
    drawMapLayer(map, "layer3");
}

function drawMapLayer(map, layer) {
    for (let i = 0; i < map.raw[layer].length; i++) {
        var tile = map.raw[layer][i].tile;
        var p = new position(null, map.raw[layer][i].x * 32, map.raw[layer][i].y * 32);
        imageSet.draw(map.tileset, p, tile.x, tile.y);
    }
}