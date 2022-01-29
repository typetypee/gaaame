var config = {
  type: Phaser.AUTO,
  
  physics: {
    default: "arcade",
    arcade: {
      gravity: {y: 300},
      debug: true
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  scale: {
    mode: Phaser.Scale.NONE,
    width: 300,
    height: 150,
    zoom: 4
  },
  

}

var game = new Phaser.Game(config);

var player;

function preload() {
  this.load.image("ground", "art/green-thing.png");
  this.load.image("sky", "art/sky.png");
  this.load.image("platform", "art/platform.png");
  this.load.spritesheet("player", "art/characters/adventurer-Sheet.png", {frameWidth: 50, frameHeight: 37})
  
}

var platforms;

function create() {
  
  this.background = this.add.image(150, 75, "sky");

    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;
  
  platforms = this.physics.add.staticGroup();
  
  platforms.create(150, 138, "ground");
  
  platforms.create(25, 70, "platform");
  
  platforms.create(100, 100, "platform");
  
  player = this.physics.add.sprite(100, 100, "player");
  
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);
  
  player.body.setGravityY(300);
  
  player.setSize(20, 35, true);
  
  this.anims.create({
    key: "walk",
    frames: this.anims.generateFrameNumbers("player", {start: 8, end: 13}),
    frameRate: 10,
    repeat: -1
  });
  
  this.anims.create({
    key: "idle",
    frames: this.anims.generateFrameNumbers("player", {start: 0, end: 3}),
    frameRate: 5,
    repeat: -1
  })
   
  this.anims.create({
    key: "jump",
    frames: this.anims.generateFrameNumbers("player", {start: 14, end: 22}),
    frameRate: 15,
    repeat: -1
  })
  

  this.physics.add.collider(player, platforms);
  
  cursors = this.input.keyboard.createCursorKeys();
}


function update() {
  
  if(cursors.left.isDown) {
    player.setVelocityX(-100);
    player.flipX = true;
    if(player.body.touching.down) player.anims.play("walk", true);
  
  }
  else if(cursors.right.isDown) {
    player.setVelocityX(100);
    player.flipX = false;
    if(player.body.touching.down) player.anims.play("walk", true);
  }
  else {
    player.setVelocityX(0);
    player.anims.play("idle", true);
  
  }
  
  if(cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-200);
    player.anims.play("jump", true);

  }
}