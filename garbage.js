class Garbage{
    constructor(x,y,width,height){
       waste = createSprite(x,y,width,height);
        this.width = width;
        this.height = height;
        this.image = loadImage("garbage.png");
        
    }
    display(){
        waste.addImage(this.image);
        waste.scale = 0.15;
    //    a imageMode(CENTER);
    //     image(this.imge, 0, 0, this.width, this.height);
       drawSprites(); 
    }
}