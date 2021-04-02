var block1,block2,block3,block4,block5,block6,block7,block8

var polygon






function setup() {
  createCanvas(800,400);
  
block1=new Block(360,235,30,40);


block2=new Block(390,235,30,40);


block3=new Block(420,235,30,40);



block4=new Block(450,235,30,40);



block5=new Block(480,235,30,40);



block6=new Block(510,235,30,40);



block7=new Block(540,235,30,40);



block8=new Block(570,235,30,40);


polygon1=new Polygon(200,200,20,20)




}
function draw() {
  background("pick");  

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  polygon1.display();







  drawSprites();
}