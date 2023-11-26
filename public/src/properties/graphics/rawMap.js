var rawMaps = {};

class rawMap {
    constructor(file, name) {
        if (!name) {
            name = file;
            file = "";
        } else file += "/";
        this.file = file;
        this.name = name;
        this.raw = loadJSON("res/Maps/" + file + name + ".json", () => {
            this.loaded = true;
        });
        this.loaded = false;
        rawMaps[name] = this;
    }
}