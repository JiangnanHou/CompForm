function setup() {
  createCanvas(500, 500);
  // colorMode(HSB, 255);
}

function draw() {
  background(255);
  //background(255);
  img = createImage(500, 500);
  img.loadPixels();

  for (var y = 0; y < img.height; y++) {
    for (var x = 0; x < img.width; x++) {
      let c = color(
        dist(width / 2, height / 2, x, y) * 2,
        dist(width / 2, height / 2, x, y) / 2,
        dist(width / 2, height / 2, x, y) / 4
      );
      let c2 = color(random(255), random(155), 255);
      let c3 = color(
        dist(width / 2, height / 2, x, y),
        dist(width / 2, height / 2, x, y) * 2,
        dist(width / 2, height / 2, x, y) * 4
      );

      img.set(
        (noise(2 * x, y) * x) / 2 + x / 2,
        (noise(x, y) * y) / 2 + y / 2,
        c
      );
      img.set(
        width / 1.1 - noise(2 * x, y) * x,
        height * 1.3 - noise(x, y) * y,
        c3
      );

      img.set(x, y, c2);
    }
  }

  img.updatePixels();
  noSmooth();
  image(img, 0, 0, width, height);
  noLoop();
}

function keyPressed() {
  if (key == "a") {
    save(frameCount + ".png");
  }
}
