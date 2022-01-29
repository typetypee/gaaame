var Player = function(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.state = "idle";
  this.direction = "right";
  this.speed = 5;
  this.dx = 0;
  this.dy = 0;
  this.currentFrame = 0;
  this.frameCount = 0;
  this.frameCycle = {"idle": [[0, 0]], "left": [[1, 2], [2, 2], [3, 2]], "right": [[1, 2], [2, 2], [3, 2]]};
  
  
}

var player = new Player(100, 100, 32, 48);

