// 小手調べ
function setup(){
  ellipse(50,50,50)
  for(let i = 0; i < 5; i++){
    stroke(255,0,0)
    ellipse(50,50,100-i*10)
    for(let j=5;j<10;j++){
      stroke(0,0,255)
      ellipse(50,50,100-j*10)
          }
    
    // BLANK[1]
  }
}
