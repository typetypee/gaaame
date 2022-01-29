 function drawFrame(frameX, frameY, x, y, width, height, sprite) {
     if(sprite.complete) ctx.drawImage(sprite,
                    frameX * width, frameY * height, width, height,
                    x, y, width, height);
      else sprite.onload = function() {ctx.drawImage(sprite,
                    frameX * width, frameY * height, width, height,
                    x, y, width, height);}
  }
  
function getImage(fileName) {
  var file = new Image();
  file.src = fileName;
  return file;

  
}


Player.prototype.render = function() {

  if(this.state === "idle") {
     this.animate(getImage("art/characters/russia.png"), this.frameCycle.idle, 5);
  }
  else if(this.state === "moveLeft") {
     this.animate(getImage("art/characters/russia.png"), this.frameCycle.left, 5);
  }
  else if(this.state == "moveRight") {
     this.animate(getImage("art/characters/russia.png"), this.frameCycle.right, 5);
  }

  
}

function renderUpdate() {
  player.render();
}