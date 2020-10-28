function preload() {
  beak = loadImage("beak.jpeg");
}
function setup() {
  createCanvas(800, 600);
  beak.loadPixels();
}

function draw() {
  //background(255);
  image(beak, 0, 0, width, height);
  img = createImage(width, height);
  img.loadPixels();

  for (var y = 0; y < beak.height; y++) {
    for (var x = 0; x < beak.width; x++) {
      let c = getQuick(beak, x, y);
      let c2 = getQuick(beak, x, y + 20);
      let c3;
      // let c3 = [
      //   lerp(c[0], c2[0], 0.2),
      //   lerp(c[1], c2[1], 0.5),
      //   lerp(c[2], c2[2], 0.9),
      //   c[3],
      // ];
      if (c[0] > 120 && c[1] > 120 && c[2] > 120) {
        c3 = [0, 255, 155, 255];
      } else if (c[0] < 30 && c[1] < 30 && c[2] < 30) {
        c3 = [255, 220, 180, 255];
      } else {
        c3 = [c[0] / 2, c[1] / 2, c[2] * 2, c[3]];
      }
      img.set(x, y, c3);

      if (c3[0] < 110 && c3[1] < 110 && c3[2] < 110) {
        //c3 = [255, 255, 255, 255];
        c3 = [255, 0, 0, 255];
        img.set(x, y, c3);
      }
      if (random() > 0.5) {
        img.set(random(width), random(height), c2);
      }
    }
  }

  img.updatePixels();
  noSmooth();
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
