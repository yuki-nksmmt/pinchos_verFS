function drawMapScene() {
  image(maps, 0, 0, width, height);
  image(pin, 600, 450, 50, 50);
  image(pin, 500, 300, 50, 50);
  image(pin, 600, 200, 50, 50);
}

function drawTomatoFarmScene() {
  image(hatake, 0, 0, width, height);
  fill(255, 120);
  stroke(0);
  rect(1100, 550, 150, 150, 25);
  image(tomato, 1100, 550, 150, 150);
  image(turn, 50, 50, 100, 100);
  if (pickStack.includes(ingredients.tomato)) {
    image(batsu, 1100, 550, 150, 150);
  }
}

function drawHatakeBScene() {
  image(hatake, 0, 0, width, height);
  fill(255, 120);
  stroke(0);
  rect(1100, 550, 150, 150, 25);
  image(olive, 1100, 550, 150, 150);
  image(turn, 50, 50, 100, 100);
  if (pickStack.includes(ingredients.olive)) {
    image(batsu, 1100, 550, 150, 150);
  }
}

function drawSeaScene() {
  image(sea, 0, 0, width, height);
  fill(255, 120);
  stroke(0);
  rect(1100, 550, 150, 150, 25);
  image(saba, 1100, 550, 150, 150);
  image(turn, 50, 50, 100, 100);
  if (pickStack.includes(ingredients.saba)) {
    image(batsu, 1100, 550, 150, 150);
  }
}
