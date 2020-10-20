function isTouching(obj1, obj2){

    if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
      && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
      && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
      && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
    return true;
  }
  else {
    return false;
  }
  
  }
  function bounceOff(o,a){
    if (o.x - a.x < a.width/2 + o.width/2
      &&a.x - o.x < a.width/2 + o.width/2) {
    o.velocityX = o.velocityX * (-1);
    a.velocityX = a.velocityX * (-1);
  }
  if( o.y - a.y < a.height/2 + o.height/2
    && a.y - o.y < a.height/2 + o.height/2){
    o.velocityY = o.velocityY * (-1);
    a.velocityY = a.velocityY * (-1);
  }
  }
  
