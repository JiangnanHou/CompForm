function preload() {
  jst = loadImage("justin.jpeg");
}
function setup() {
  createCanvas(1000, 500);
  jst.loadPixels();
}

function draw() {
  background(0);

  for (var y = 0; y < jst.height; y += 25 / 3) {
    for (var x = 0; x < jst.width; x += 25 / 3) {
      let c = getQuick(jst, x, y);

      stroke(c);
      strokeWeight(0.5);
      let y1, y2, y3, y4;
      y1 = -30;
      y2 = 55;
      y3 = 145;
      y4 = 140;
      if (c[0] > 100 && c[1] < 110 && lightness(c) < 65) {
        line(
          500,
          y1 + lightness(c) * 2.5,
          500 + c[0] * 1.8,
          y1 + lightness(c) * 2.5
        );
      } else if (c[1] > 100 && c[0] < 100 && lightness(c) < 65) {
        line(
          500,
          y2 + lightness(c) * 2.5,
          500 + c[1] * 1.8,
          y2 + lightness(c) * 2.5
        );
      } else if (c[2] > 100 && c[0] < 100 && lightness(c) < 65) {
        line(
          500,
          y3 + lightness(c) * 2.5,
          500 + c[2] * 1.8,
          y3 + lightness(c) * 2.5
        );
      } else {
        line(
          500,
          y4 + lightness(c) * 2.5 + (x + y) / 20,

          500 + ((c[0] * c[1]) / c[2]) * 1.8,
          y4 + lightness(c) * 2.5 + (x + y) / 20
        );
      }
    }
  }

  noSmooth();
  image(jst, 0, 0, 500, height);
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
