// 最終課題を制作しよう

let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw(){
  
  background(220)
  
  strokeWeight(4);    
  fill(178, 100, 162); 
  triangle(12,120,116,120,116,10); 
  fill(94, 185, 84);  
  triangle(0,108,106,108,106,0);   
  fill(255);　         
  textSize(32);        
  textFont("serif");   
  text("46", 68, 100); 

  strokeWeight(4);     
  fill(178, 100, 162); 
  triangle(150,120,254,120,254,10);
  fill(255);　         
  textSize(32);        
  textFont("serif");   
  text("46", 210, 110); 

  

  
  strokeWeight(4);     
  fill(178, 100, 162); 
  triangle(300,120,404,120,404,10); 
  fill(160, 192, 255);  
  triangle(288,108,392,108,392,0);   
  fill(255);　       
  textSize(32);        
  textFont("serif");   
  text("46", 354, 100); 
  
  strokeWeight(2);
  fill(178, 100, 162); 
  triangle(450, 120, 554, 120, 554, 10); 
  fill(94, 185, 84);
  triangle(444, 114, 548, 114, 548, 6);
  fill (252, 100, 5);
  triangle(436, 108, 542, 108, 542, 0);
  fill(255);
  textSize(32); 
  textFont("serif")
  text("46", 500, 100);


  nishida(mouseX, mouseY )

  fill(0)
  textSize(16)
  text("西田先生をドラッグして、好きな坂道グループに連れていってあげましょう！", 0, windowHeight / 2)



  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    if(mouseX < 116 && mouseY < 120){
    heart(b.x, b.y, b.size * 20);
    b.x += b.vx;
    b.y += b.vy;
    }
    if(mouseX < 254 && mouseX > 150 && mouseY < 120){
    heart(b.x, b.y, b.size * 5);
    b.x += b.vx;
    b.y += b.vy;
    }
    if(mouseX < 404 && mouseX > 300 && mouseY < 120){
      heart(b.x, b.y, b.size );
      b.x += b.vx;
      b.y += b.vy;
    }
    if(mouseX < 554 && mouseX > 450 && mouseY < 120){
        ngmark(b.x, b.y, b.size * 5 );
        b.x += b.vx;
        b.y += b.vy;
    }
  }
}



function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: random(1,20), vx: dx, vy: dy };
    balls.push(b);
  }
}


function heart(x, y, size) {
  fill(255,20,147)
  beginShape();     
  vertex(x, y);     
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);  
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);  
  endShape(CLOSE);  
}

function ngmark(cx, cy, r){
  push();
  noFill();
  strokeWeight(r * 0.1);
  let d = sqrt(r * r / 8);
  ellipse(cx, cy, r);
  line(cx - d, cy - d, cx + d, cy + d);
  pop();
}

function nishida(x, y){
  ellipse(x, y, 60)
  rect(x-40, y+30, 80, 120 )
  rect(x-70, y+40, 30, 20)
  rect(x+40, y+40, 30, 20)
  rect(x-30, y+150, 20, 50)
  rect(x+10, y+150, 20, 50)
  strokeWeight(0.5)
  rect(x-20, y-10, 15, 10)
  rect(x+5, y-10, 15, 10)
  line(x-5, y-5, x+5, y-5)  

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}