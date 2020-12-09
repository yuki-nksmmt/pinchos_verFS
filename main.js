// リファクタリング案
// const scenes = {
//   map: 0,
//   farmA: 1,
//   farmB: 2,
//   sea: 3,
// };
// let sceneNumber = 0;

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
let map_main = true;
let map_sea = false;
let map_hatakeA = false;
let map_hatakeB = false;
//-------------------------------------------------------//

//-----------------item_visivle(on_pin)------------------//
let vis_saba = false;
let vis_tomato = false;
let vis_olive = false;
//-------------------------------------------------------//

function setup() {
  //---------------Canvas_settings-----------------------//
  const myCanvas = createCanvas(1280, 720);
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
  //---------------sraw scene----------------------------//
  if (map_main) {
    drawMapScene();
  } else if (map_hatakeA) {
    drawTomatoFarmScene();
  } else if (map_hatakeB) {
    drawHatakeBScene();
  } else if (map_sea) {
    drawSeaScene();
  }
  //-----------------------------------------------------//

  //---------------pick_visible--------------------------//
  image(pick,mouseX-150,mouseY-250,300,300);
  if(vis_saba){
    image(saba,mouseX-50,mouseY-200+50,100,100);
  }
  if(vis_tomato){
    image(tomato,mouseX-50,mouseY-200+100,100,100);
  }
  if(vis_olive){
    image(olive,mouseX-50,mouseY-200+150,100,100);
  }
  //-----------------------------------------------------//
}

function mousePressed(){
  /*------------------map-------------------------------*/
  //------------------sea-------------------------------//
  if (map_main && mouseX >= 600 && mouseX < 650 && mouseY >= 450 && mouseY < 500) {
    map_sea = true;
    map_main = false;
  }
  //------------------tomato_farm----------------------//
  if (map_main && mouseX >= 500 && mouseX < 550 && mouseY >= 300 && mouseY < 350) {
    map_hatakeA = true;
    map_main = false;
  }
  //------------------Olive_farm----------------------//
  if (map_main && mouseX >= 600 && mouseX < 650 && mouseY >= 200 && mouseY < 250) {
    map_hatakeB = true;
    map_main = false;
  }
  //------------------Olive_farm----------------------//
  //restart
  if (vis_tomato && vis_saba && vis_olive) {
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
  if (map_sea && mouseX >= 50 && mouseX < 150 && mouseY >= 50 && mouseY < 150) {
    map_sea = false;
    map_main = true;
  }
  //saba
  if (map_sea && mouseX >= 1100 && mouseX < 1260 && mouseY >= 550 && mouseY < 700) {
    map_sea = false;
    map_main = true;
    vis_saba = true;
  }

  //-----------------tomato_farm----------------------//
  //return_to_map
  if (map_hatakeA && mouseX >= 50 && mouseX < 150 && mouseY >= 50 && mouseY < 150) {
    map_hatakeA = false;
    map_main = true;
  }
  //tomato
  if (map_hatakeA && mouseX >= 1100 && mouseX < 1260 && mouseY >= 550 && mouseY < 700) {
    map_hatakeA = false;
    map_main = true;
    vis_tomato = true;
  }

  //-----------------olieve_farm---------------------//
  //return_to_map
  if (map_hatakeB && mouseX >= 50 && mouseX < 150 && mouseY >= 50 && mouseY < 150) {
    map_hatakeB = false;
    map_main = true;
  }
  //olieve
  if (map_hatakeB && mouseX >= 1100 && mouseX < 1260 && mouseY >= 550 && mouseY < 700) {
    map_hatakeB = false;
    map_main = true;
    vis_olive = true;
  }
}
