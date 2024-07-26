class Projectile {
  constructor({ position, radius, enemy }) {
    this.position = position;
    this.radius = radius; // Define the radius of the projectile
    this.enemy = enemy;
    this.speed = 5; // Example speed
    
  }

  update() {
    // Move the projectile towards the target enemy
    const xDifference = this.enemy.position.x - this.position.x;
    const yDifference = this.enemy.position.y - this.position.y;
    const angle = Math.atan2(yDifference, xDifference);

    this.position.x += Math.cos(angle) * this.speed;
    this.position.y += Math.sin(angle) * this.speed;

    // Draw the projectile
    this.draw();
  }

  draw() {
    c.beginPath();
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

  hasHitTarget() {
    // Check if the projectile has hit the enemy
    const distance = Math.hypot(
      this.enemy.position.x - this.position.x,
      this.enemy.position.y - this.position.y
    );
    return distance < this.enemy.radius + this.radius;
  }
}
