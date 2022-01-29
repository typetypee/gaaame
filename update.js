var frameCount = 0;

function update() {
  frameCount++;
  if(frameCount >= 5) {
     
    frameCount = 0;
    
    
    
    
    
  
  //fill canvas with black
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  player.move();
  renderUpdate();
  }
   window.requestAnimationFrame(update);
  
}
  
  update();
