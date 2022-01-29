Player.prototype.animate = function(spriteSheet, frameCycle, time) {
     ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  
  
  //this.frameCount++;
  //if(this.frameCount >= 5) {
     
    //this.frameCount = 0;
    this.currentFrame++;
    
    if(this.currentFrame >= 5) {
      this.currentFrame = 0;
       //  ctx.fillStyle = "white";
   // ctx.fillRect(100,100,32,48);
    }
    
    //drawFrame(frameCycle[this.currentFrame][0], frameCycle[this.currentFrame][1], this.x, this.y, this.width, this.height, spriteSheet);
    
    
  //}
  var _this = this;
   window.requestAnimationFrame(function(){_this.animate(this);});
  
  
}

