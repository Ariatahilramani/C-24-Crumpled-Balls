
    class Ball {
        constructor() {
          var options = {
          isStatic:true,
          restitution:0.3,
          friction:0.1,
          density:1.2,
          }

          ballBody = Bodies.circle(200,200,20,{options});
         
    
          World.add(world, ballBody);
        }
        display(){
         ellipseMode(RADIUS);
          
          ellipse(ballBody.position.x,ballBody.position.y,20,30);
          
        }
      }
      
        