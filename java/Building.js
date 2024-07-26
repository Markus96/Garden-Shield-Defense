class Building {
  constructor({ position = { x: 0, y: 0 } }) {
    this.position = position;
    this.width = 64;
    this.height = 64;
    this.imageSrc = './img/basic tower.png';
    this.image = new Image();
    this.image.src = this.imageSrc;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2
    };
    this.projectiles = [];
    this.radius = 250; // Radius of the building's attack range
    this.projectileRadius = 5; // Radius of the projectiles
    this.target = null;
  }

  draw() {
    // Draw the static image of the building
    c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();

    if (this.target) {
      // Shoot only if a target is set
      this.shoot();
    }

    this.projectiles.forEach((projectile, index) => {
      projectile.update();
      if (projectile.hasHitTarget()) {
        console.log('Projectile hit the target!');
        this.projectiles.splice(index, 1); // Remove the projectile if it hit the target
      }
    });
  }

  shoot() {
    if (this.target) {
      // Create a new projectile and add it to the list
      this.projectiles.push(
        new Projectile({
          position: {
            x: this.center.x, // Start at the center of the building
            y: this.center.y - this.height / 2 // Adjust the vertical position
          },
          radius: this.projectileRadius, // Pass projectile radius
          enemy: this.target
        })
      );
    }
  }
}
