var keys = {};

window.addEventListener('keydown', function(e) {
  keys[e.keyCode] = true;
  e.preventDefault();
});

window.addEventListener('keyup', function(e) {
  delete keys[e.keyCode];

  player.dx = 0;
  player.dy = 0;
});

Player.prototype.move = function() {
  this.x += this.dx;
  this.y += this.dy;
  /**this.dx *= this.friction;
  this.dy *= this.friction;**/
  
  
    if(37 in keys || 39 in keys || 38 in keys|| 40 in keys) {
      
      this.hasMoved = true;
      
    } else {
      this.state = "idle"
    }
      
  //left
  if (37 in keys) {
    this.dx = this.speed * -1;
    this.state = "moveLeft";
    
  }
  //right
  if (39 in keys) {
    this.dx = this.speed;
      this.state = "moveRight";
  }
  //up
  if (38 in keys) {
    this.state = "jumping";

  }
  
}

