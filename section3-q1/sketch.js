// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let vcount;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  if(keyIsDown(LEFT_ARROW)){
    count = (count + 2) % cycle;
  }
  if(keyIsDown(RIGHT_ARROW)){
    count = (count + 10) % cycle;
  }
  else{ count = (count + 1) % cycle;}

  if(count < 45){
    size=count*4
  }
  else{size = (100 - count)*2}
  // BLANK[1]
  ellipse(width / 2, height / 2, size);
}
