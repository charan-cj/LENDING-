class Build{
    constructor(x,y,width,height){
        build = createSprite(x,y,width,height);
        this.width = width;
        this.heigth = height;
        this.image = loadImage("build1.png");
        this.depth = build.depth;

    }
    display(){
       
       
        // push();
        build.addImage(buildImg);
        build.scale = 0.15;
        // imageMode(CENTER);
        // image(this.image, 0, 0, this.width, this.height);
        // pop();
       drawSprites(); 
    }
}