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
  // Agrega la imagen 'piluka' en el centro de la pantalla
  this.piluka = this.add.image(400, 300, 'piluka');
  
  // Si quieres agregar la burbuja, descomenta la línea de abajo
  // this.bubble = this.add.image(200, 150, 'bubble');
}

function update() {
  // Puedes animar las imágenes aquí, por ejemplo hacer rotar a 'piluka'
  // this.piluka.rotation += 0.01;
}

function create() {
  this.piluka = this.add.image(400, 550, 'piluka').setScale(0.5);
  this.input.on('pointerdown', shootBubble, this);
}

function shootBubble(pointer) {
  const bubble = this.physics.add.image(400, 500, 'bubble');
  bubble.setVelocity((pointer.x - 400), (pointer.y - 500));
}
