function preload() {
  ash = loadImage("ash.jpeg");
}
function setup() {
  createCanvas(500, 500);
  ash.loadPixels();
}

function draw() {
  background(0);

  for (var y = 0; y < ash.height; y += 90) {
    for (var x = 0; x < ash.width; x += 40) {
      let c = getQuick(ash, x, y);
      let c2 = getQuick(ash, x, y + 20);
      let c3;

      if (lightness(c) > 10) {
        let x1 = x + random(-30, 30);
        let y1 = y + random(-30, 30);
        let offset = random(-10, 10);

        for (let i = 0; i < 360; i += 5) {
          let r = random(30, 120);
          let a = 255;
          if (random() > 0.5) {
            a = 150;
          }
          //dots
          stroke(255 + random(-50, 0), 185 + random(-50, 0), 30, a);
          strokeWeight(0.4);
          line(
            x1 + sin(radians(i)) * r * 1.45 + offset,
            y1 + cos(radians(i)) * r * 1.45 + offset,
            x1 + sin(radians(i)) * r * 1.5,
            y1 + cos(radians(i)) * r * 1.5
          );

          //circle1
          stroke(255 + random(-50, 0), 185 + random(-50, 0), 30, a);
          strokeWeight(0.6);
          line(
            x1 + (sin(radians(i)) * r) / 1.5 + offset,
            y1 + (cos(radians(i)) * r) / 1.5 + offset,
            x1 + sin(radians(i)) * r,
            y1 + cos(radians(i)) * r
          );
          //circle2
          stroke(255 + random(-20, 0), 220 + random(-50, 0), 150, a);
          strokeWeight(1);
          line(
            x1 + (sin(radians(i)) * r) / 2.5 + offset,
            y1 + (cos(radians(i)) * r) / 2.5 + offset,
            x1 + (sin(radians(i + 2)) * r) / 1.5,
            y1 + (cos(radians(i + 2)) * r) / 1.5
          );
          //circle3
          stroke(255, 230, 200, a);
          strokeWeight(0.8);
          line(
            x1 + (sin(radians(i)) * r) / 5.5 + offset,
            y1 + (cos(radians(i)) * r) / 5.5 + offset,
            x1 + (sin(radians(i + 4)) * r) / 2.5,
            y1 + (cos(radians(i + 4)) * r) / 2.5
          );

          //circle4
          stroke(255, 245, 225, a);
          //stroke(255 + random(-40, 0), 180 + random(-40, 0), 30, a);
          strokeWeight(0.6);
          line(
            x1 + offset,
            y1 + offset,
            x1 + (sin(radians(i)) * r) / 3.5,
            y1 + (cos(radians(i)) * r) / 3.5
          );
        }
      }
    }
  }

  noSmooth();

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
