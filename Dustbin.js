class Dustbin{
    
    constructor(boxX,boxY){
     
        var options ={
            isStatic : true
          
           
        }
        this.boxLeftBody = Bodies.rectangle(boxX+20, boxY, 20,100,options);
        World.add(world, this.boxLeftBody);
        this.boxBottomBody = Bodies.rectangle(boxX+100, boxY+45-20, 200,20.,options);
        World.add(world, this.boxBottomBody);
        this.boxRightBody = Bodies.rectangle(boxX+200-20 , boxY, 20,100,options);
        World.add(world, this.boxRightBody);
        
        this.leftWidth = 20;
        this.leftHeight = 75;
       
        this.rightWidth = 20;
        this.rightHeight = 75;
        
        this.bottomWidth = 200;
        this.bottomHeight = 20;
      
    }

    display(){
        var leftpos = this.boxLeftBody.position;
        var bottompos = this.boxBottomBody.position;
        var rightpos = this.boxRightBody.position;


        rectMode(CENTER);
        fill("255");  
        rect(leftpos.x,leftpos.y,this.leftWidth,this.leftHeight);
        rect(rightpos.x,rightpos.y,this.rightWidth,this.rightHeight);
        rect(bottompos.x,bottompos.y,this.bottomWidth,this.bottomHeight);
           
       
    }
};