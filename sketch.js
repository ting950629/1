let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
  capture.hide();
}

function draw() {
  background('#e7c6ff');
  image(capture, (windowWidth - capture.width) / 2, (windowHeight - capture.height) / 2);
}

