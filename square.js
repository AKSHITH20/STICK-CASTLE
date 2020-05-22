class Square extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/square.png");
  }

  display() {
    super.display();
  }
}
