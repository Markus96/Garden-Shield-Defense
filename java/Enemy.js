class Enemy extends Sprite {
  constructor({ position = { x: 0, y: 0 }, health = 100 }) {
    super({
      position,
      imageSrc: 'img/crow.png',
      frames: {
        max: 7
      }
    });

    this.position = position;
    this.width = 100;
    this.height = 100;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2
    };
    this.radius = 50;
    this.health = health;
    this.velocity = { x: 0, y: 0 }; // Static, so set to 0
  }

  draw() {
    super.draw();

    // Draw health bar
    c.fillStyle = 'red';
    c.fillRect(this.position.x, this.position.y - 15, this.width, 10);

    c.fillStyle = 'green';
    c.fillRect(
      this.position.x,
      this.position.y - 15,
      (this.width * this.health) / 100,
      10
    );
  }

  update() {
    this.draw();
    super.update();
    // No movement logic needed for a static enemy
  }
}
