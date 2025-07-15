const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#aeeefc',
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image('piluka', 'assets/piluka.png');
  this.load.image('bubble', 'assets/bubble.png');
}

function create() {
  this.piluka = this.add.image(400, 550, 'piluka').setScale(0.5);
  this.input.on('pointerdown', shootBubble, this);
}

function shootBubble(pointer) {
  const bubble = this.physics.add.image(400, 500, 'bubble');
  bubble.setVelocity((pointer.x - 400), (pointer.y - 500));
}
