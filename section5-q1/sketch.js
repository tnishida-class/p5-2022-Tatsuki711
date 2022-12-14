// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46",2 , 10, 125, 125, 125);
}

function balloon(t, x, y, cr, cg, cb){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  noStroke()
  fill(cr, cg, cb);
  rect(x, y, x + w + p, y + h + p);
  triangle(x + w + p - 20, y + h + p + 10, x + w + p - 10, y+h+p+30, x+w+p-10, y+h+p+10 )
  fill(255);
  text(t, p, h + p);
}
