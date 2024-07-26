// Enemy.js
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
    this.velocity = { x: 0, y: 0 };
    this.waypointIndex = 0;
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

    // Calculate distance to next waypoint
    const waypoint = waypoints[this.waypointIndex];
    const dx = waypoint.x - this.center.x;
    const dy = waypoint.y - this.center.y;
    const distance = Math.hypot(dx, dy);

    // Move towards next waypoint
    const speed = 2; // Adjust speed as needed
    this.velocity.x = (dx / distance) * speed;
    this.velocity.y = (dy / distance) * speed;

    // Update position
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2
    };

    // Check if reached waypoint
    if (distance < speed) {
      this.waypointIndex++;
      if (this.waypointIndex >= waypoints.length) {
        this.waypointIndex = 0; // Loop back to start or handle end of path
      }
    }
  }
}
