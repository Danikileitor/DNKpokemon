var rawImages = {};

class rawImage {
  constructor(dir, file, name) {
    if (!name) {
      name = file;
      file = "";
    } else file += "/";
    this.file = file;
    this.name = name;
    this.dir = dir;
    this.raw = loadImage("res/Graphics/" + dir + file + name + ".png", () => {
      this.loaded = true;
      this.width = this.raw.width;
      this.height = this.raw.height;
    });
    this.loaded = false;
    rawImages[name] = this;
  }

}