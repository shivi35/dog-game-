class Playing{
    constructor(){

    }

    play(){
        bg1=createSprite(0,0,800,400)
        bg1.scale=2
        bg1.addImage(Pbackground1)
        Blyth=createSprite(100,300)
        invisibleGround=createSprite(400,370,800,10)
        if(keyDown("space")){
              Blyth.velocityY=-10
           }
      
     // invisibleGround.visible=false;
     Blyth.collide(invisibleGround);
    
      Blyth.velocityY=Blyth.velocityY+0.5
        }
}
