function preload() {
  tattoo = loadImage("jiujing.jpeg");
}

function setup() {
  createCanvas(500, 500);
  tattoo.loadPixels();
  background(0);
}

function draw() {
  background(0, 20);
  img = createImage(width, height);
  img.loadPixels();

  for (var y = 0; y < tattoo.height; y++) {
    for (var x = 0; x < tattoo.width; x++) {
      let c = getQuick(tattoo, x, y);
      //let c2 = getQuick(tattoo, x + 1, y);

      if (lightness(c) < 35) {
        let c1 = color(255, 255 - frameCount * 2);

        // img.set(
        //   x + (x - width / 2) * (frameCount * 0.1) + random(-50, 50),
        //   y - (frameCount * frameCount) / 30,
        //   c1
        // );
        img.set(x, y, c1);
      }
    }
  }

  img.updatePixels();
  //noSmooth();
  image(img, 0, 0, width, height);
  noLoop();
}

function getQuick(img, x, y) {
  let i = (y * img.width + x) * 4;
  return [
    img.pixels[i],
    img.pixels[i + 1],
    img.pixels[i + 2],
    img.pixels[i + 3],
  ];
}

function keyPressed() {
  if (key == "a") {
    save(frameCount + ".png");
  }
}
