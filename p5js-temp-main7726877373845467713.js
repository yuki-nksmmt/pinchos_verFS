//-----------------map_image_def------------------------//
////window
let maps, last;
////scene_background
let sea, hatake;

//item_image_def
////food
let tomato, olive, saba;
////item
let pin, pick;
////mark
let turn, batsu;
//-------------------------------------------------------//

//-----------------scene_transition----------------------//
var map_main = true;
var map_sea = false;
var map_hatakeA = false;
var map_hatakeB = false;
//-------------------------------------------------------//

//-----------------item_visivle(on_pin)------------------//
var vis_saba = false;
var vis_tomato = false;
var vis_olive = false;
//-------------------------------------------------------//

function setup() {
  //---------------Canvas_settings-----------------------//
  var myCanvas = createCanvas(1280, 720);
  myCanvas.parent("canvasContainer");
  frameRate(60);
  //noCursor(); /*FOR DEBUG*/
  //-----------------------------------------------------//

  //---------------load_images---------------------------//
  ////scene_image
  maps = loadImage("./data/maps.jpg");
  last = loadImage("./data/last.jpg");

  ////scene_background
  hatake = loadImage("./data/hatake.jpg");
  sea = loadImage("./data/sea.jpg");

  ////food_image
  olive = loadImage("./data/Olive.png");
  saba = loadImage("./data/saba.png");
  tomato = loadImage("./data/tomato.png");

  ////item_image
  pin = loadImage("./data/pin.png");
  pick = loadImage("./data/tsumayouji.png");

  ///mark_image
  turn = loadImage("./data/turn.png");
  batsu = loadImage("./data/batsu.png");
  //-----------------------------------------------------//
}

function draw() {
  //---------------maps_draw----------------------------//
  if (map_main == true) {
    image(maps, 0, 0, width, height);
    image(pin, 600, 450, 50, 50);
    image(pin, 500, 300, 50, 50);
    image(pin, 600, 200, 50, 50);
  }
  //-----------------------------------------------------//

  /*---------------SCENE---------------------------------*/
  //---------------tomato_farm_draw----------------------//
  if (map_hatakeA == true) {
    image(hatake, 0, 0, width, height);
    fill(255, 120);
    stroke(0);
    rect(1100, 550, 150, 150, 25);
    image(tomato, 1100, 550, 150, 150);
    image(turn, 50, 50, 100, 100);
    if (vis_tomato == true) {
      image(batsu, 1100, 550, 150, 150);
    }
  }
  //-----------------------------------------------------//

  //---------------Olive_farm_draw-----------------------//
  if (map_hatakeB == true) {
    image(hatake, 0, 0, width, height);
    fill(255, 120);
    stroke(0);
    rect(1100, 550, 150, 150, 25);
    image(olive, 1100, 550, 150, 150);
    image(turn, 50, 50, 100, 100);
    if (vis_olive == true) {
      image(batsu, 1100, 550, 150, 150);
    }
  }
  //-----------------------------------------------------//

  //---------------sea_draw------------------------------//
  if (map_sea == true) {
    image(sea, 0, 0, width, height);
    fill(255, 120);
    stroke(0);
    rect(1100, 550, 150, 150, 25);
    image(saba, 1100, 550, 150, 150);
    image(turn, 50, 50, 100, 100);
    if (vis_saba == true){
      image(batsu, 1100, 550, 150, 150);
    }
  }
  //-----------------------------------------------------//
  
  //---------------pick_visible--------------------------//
  image(pick,mouseX-150,mouseY-250,300,300);
  if(vis_saba == true){
    image(saba,mouseX-50,mouseY-200+50,100,100);
  }
  if(vis_tomato == true){
    image(tomato,mouseX-50,mouseY-200+100,100,100);
  }
  if(vis_olive == true){
    image(olive,mouseX-50,mouseY-200+150,100,100);
  }
  //-----------------------------------------------------//
  
}

function mousePressed(){
  /*------------------map-------------------------------*/
  //------------------sea-------------------------------//
  if (map_main != false&&mouseX >= 600 && mouseX < 650 && mouseY >= 450 && mouseY < 500) {
    map_sea = true;
    map_main = false;
  }
  //------------------tomato_farm----------------------//
  if (map_main != false&&mouseX >= 500 && mouseX < 550 && mouseY >= 300 && mouseY < 350) {
    map_hatakeA = true;
    map_main = false;
  }
  //------------------Olive_farm----------------------//
  if (map_main != false&&mouseX >= 600 && mouseX < 650 && mouseY >= 200 && mouseY < 250) {
    map_hatakeB = true;
    map_main = false;
  }
  //------------------Olive_farm----------------------//
  //restart
  if (vis_tomato == true&&vis_saba == true&&vis_olive  == true) {
    if (mouseX >= 640 && mouseX < 740 && mouseY >= 500 && mouseY < 600) {
      vis_olive = false;
      vis_saba = false;
      vis_tomato = false;
      map_main = true;
    }
  }

  /*------------------SCENE---------------------------*/
  //------------------sea-----------------------------//
  //return_to_map
  if (map_sea != false&&mouseX >= 50 && mouseX < 150 && mouseY >= 50 && mouseY < 150) {
    map_sea = false;
    map_main = true;
  }
  //saba
  if (map_sea != false&&mouseX >= 1100 && mouseX < 1260 && mouseY >= 550 && mouseY < 700) {
    map_sea = false;
    map_main = true;
    vis_saba = true;
  }

  //-----------------tomato_farm----------------------//
  //return_to_map
  if (map_hatakeA != false&&mouseX >= 50 && mouseX < 150 && mouseY >= 50 && mouseY < 150) {
    map_hatakeA = false;
    map_main = true;
  }
  //tomato
  if (map_hatakeA != false&&mouseX >= 1100 && mouseX < 1260 && mouseY >= 550 && mouseY < 700) {
    map_hatakeA = false;
    map_main = true;
    vis_tomato = true;
  }

  //-----------------olieve_farm---------------------//
  //return_to_map
  if (map_hatakeB != false&&mouseX >= 50 && mouseX < 150 && mouseY >= 50 && mouseY < 150) {
    map_hatakeB = false;
    map_main = true;
  }
  //olieve
  if (map_hatakeB != false&&mouseX >= 1100 && mouseX < 1260 && mouseY >= 550 && mouseY < 700) {
    map_hatakeB = false;
    map_main = true;
    vis_olive = true;
  }
}
