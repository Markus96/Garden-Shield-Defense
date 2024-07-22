const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

const tileSize = 40;
let currentLevel = 1;
let path = [];
const roadWidth = 4;

// Define the background image
const backgroundImage = new Image();
backgroundImage.src = 'assets/imgs/background.jpg';
backgroundImage.onerror = function() {
    console.error('Failed to load background.jpg');
};

backgroundImage.onload = function() {
    // Start the game after the background image is loaded
    resetGame();
    updateUI();
};

// Define the blue and red rectangle positions
const blueRect = { x: 0, y: 5 };
const redRect = { x: 15, y: 5 };

// Function to create a simple path between two points
function createPath(start, end) {
    const path = [];
    const steps = 15;  // Number of steps in the path
    const dx = (end.x - start.x) / steps;
    const dy = (end.y - start.y) / steps;

    for (let i = 0; i <= steps; i++) {
        path.push({ x: start.x + dx * i, y: start.y + dy * i });
    }

    return path;
}

// Create the path from the blue rectangle to the red rectangle
path = createPath(blueRect, redRect);

class Enemy {
    constructor(type, level) {
        this.size = tileSize - 10;
        this.x = path[0].x * tileSize + 5;
        this.y = path[0].y * tileSize + 5;
        this.pathIndex = 0;
        this.type = type;
        this.level = level;
        this.setProperties();
        this.active = true; // Added flag to track if enemy is still active
    }

    setProperties() {
        switch (this.type) {
            case 'fast':
                this.speed = 0.6;
                this.health = 50 + this.level * 10;
                this.color = 'red';
                this.reward = 20;
                break;
            case 'strong':
                this.speed = 0.4;
                this.health = 200 + this.level * 20;
                this.color = 'green';
                this.reward = 50;
                break;
            default:
                this.speed = 0.3;
                this.health = 100 + this.level * 15;
                this.color = 'blue';
                this.reward = 30;
                break;
        }
    }

    move() {
        if (this.pathIndex < path.length - 1) {
            const nextTile = path[this.pathIndex + 1];
            const dx = nextTile.x * tileSize + 5 - this.x;
            const dy = nextTile.y * tileSize + 5 - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < this.speed) {
                this.x = nextTile.x * tileSize + 5;
                this.y = nextTile.y * tileSize + 5;
                this.pathIndex++;
            } else {
                this.x += (dx / dist) * this.speed;
                this.y += (dy / dist) * this.speed;
            }
        } else {
            // Reached the end point, handle accordingly
            this.active = false;
            health -= 10; // Example: deduct health when enemy reaches endpoint
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

class Tower {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.setProperties();
    }

    setProperties() {
        switch (this.type) {
            case 'fast':
                this.range = tileSize * 3;
                this.cooldown = 0;
                this.fireRate = 10;
                this.damage = 5;
                this.color = 'yellow';
                break;
            case 'strong':
                this.range = tileSize * 4;
                this.cooldown = 0;
                this.fireRate = 60;
                this.damage = 50;
                this.color = 'green';
                break;
            default:
                this.range = tileSize * 2;
                this.cooldown = 0;
                this.fireRate = 30;
                this.damage = 10;
                this.color = 'blue';
                break;
        }
        this.target = null;
    }

    shoot(enemies) {
        if (this.cooldown > 0) {
            this.cooldown--;
            return;
        }

        for (let enemy of enemies) {
            if (!enemy.active) continue; // Skip inactive enemies
            const dx = enemy.x - this.x;
            const dy = enemy.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < this.range) {
                enemy.health -= this.damage;
                if (enemy.health <= 0) {
                    money += enemy.reward;
                    enemy.active = false; // Mark enemy as inactive
                }
                this.cooldown = this.fireRate;
                this.target = enemy;
                return;
            }
        }
        this.target = null;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x - tileSize / 2, this.y - tileSize / 2, tileSize, tileSize);

        if (this.target) {
            ctx.strokeStyle = this.color;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.target.x + this.target.size / 2, this.target.y + this.target.size / 2);
            ctx.stroke();
        }
    }
}

let enemies = [];
let towers = [];
let money = 200;
let health = 100;
let selectedTowerType = null;
let gameOver = false;
let gameStarted = false;
let countdown = 3;
let enemiesDefeated = 0;
let moneyEarned = 0;
let enemiesToSpawn = 0;
let spawnInterval;

document.getElementById('basicTowerBtn').addEventListener('click', () => selectTower('basic'));
document.getElementById('fastTowerBtn').addEventListener('click', () => selectTower('fast'));
document.getElementById('strongTowerBtn').addEventListener('click', () => selectTower('strong'));
document.getElementById('easyBtn').addEventListener('click', () => startGame('easy'));
document.getElementById('mediumBtn').addEventListener('click', () => startGame('medium'));
document.getElementById('hardBtn').addEventListener('click', () => startGame('hard'));
document.getElementById('startBtn').addEventListener('click', startNextLevel);
document.getElementById('resetBtn').addEventListener('click', resetGame);
document.getElementById('instructionsBtn').addEventListener('click', showInstructions);
document.querySelector('.close').addEventListener('click', hideInstructions);
document.getElementById('nextLevelBtn').addEventListener('click', hideStatsAndContinue);

canvas.addEventListener('click', placeTower);

function selectTower(type) {
    selectedTowerType = type;
}

function placeTower(event) {
    if (selectedTowerType === null || gameOver || !gameStarted) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const gridX = Math.floor(x / tileSize) * tileSize + tileSize / 2;
    const gridY = Math.floor(y / tileSize) * tileSize + tileSize / 2;

    const cost = { basic: 100, fast: 150, strong: 200 }[selectedTowerType];

    if (money >= cost) {
        towers.push(new Tower(gridX, gridY, selectedTowerType));
        money -= cost;
        updateUI();
    }
}

function startGame(difficulty) {
    // Path is now created based on the blueRect and redRect positions
    path = createPath(blueRect, redRect);
    currentLevel = 1;
    money = 200;
    health = 100;
    enemies = [];
    towers = [];
    gameOver = false;
    gameStarted = false;
    enemiesToSpawn = 5;
    enemiesDefeated = 0;
    moneyEarned = 0;
    createEndPoint();
    countdownStart();
    updateUI();
}

function startNextLevel() {
    currentLevel++;
    enemiesToSpawn = 5 + currentLevel * 5;
    enemies = [];
    gameStarted = false;
    countdownStart();
    updateUI();
}

function resetGame() {
    currentLevel = 1;
    money = 200;
    health = 100;
    enemies = [];
    towers = [];
    gameOver = false;
    gameStarted = false;
    path = createPath(blueRect, redRect); // Reset the path
    enemiesDefeated = 0;
    moneyEarned = 0;
    const endPoint = document.getElementById('endPoint');
    if (endPoint) {
        endPoint.remove();
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateUI();
}

function showInstructions() {
    document.getElementById('instructions').style.display = 'block';
}

function hideInstructions() {
    document.getElementById('instructions').style.display = 'none';
}

function showStats() {
    document.getElementById('enemiesDefeated').textContent = enemiesDefeated;
    document.getElementById('moneyEarned').textContent = moneyEarned;
    document.getElementById('stats').style.display = 'block';
}

function hideStatsAndContinue() {
    document.getElementById('stats').style.display = 'none';
    startNextLevel();
}

function countdownStart() {
    countdown = 3;
    const countdownInterval = setInterval(() => {
        if (countdown < 0) {
            clearInterval(countdownInterval);
            gameStarted = true;
            gameLoop();
            spawnEnemies(); // Start spawning enemies when the game starts
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawGame();
            ctx.fillStyle = 'red';
            ctx.font = '48px serif';
            ctx.textAlign = 'center';
            ctx.fillText(countdown, canvas.width / 2, canvas.height / 2);
            countdown--;
        }
    }, 1000);
}

function spawnEnemies() {
    if (spawnInterval) {
        clearInterval(spawnInterval); // Clear any existing interval
    }

    let spawned = 0;
    spawnInterval = setInterval(() => {
        if (spawned < enemiesToSpawn) {
            enemies.push(new Enemy('basic', currentLevel));
            spawned++;
        } else {
            clearInterval(spawnInterval);
        }
    }, 1000); // Spawn an enemy every second
}

function createEndPoint() {
    const endPoint = document.createElement('div');
    endPoint.id = 'endPoint';
    endPoint.style.position = 'absolute';
    endPoint.style.width = `${tileSize}px`;
    endPoint.style.height = `${tileSize}px`;
    endPoint.style.backgroundColor = 'red';
    endPoint.style.left = `${path[path.length - 1].x * tileSize}px`;
    endPoint.style.top = `${path[path.length - 1].y * tileSize}px`;
    document.body.appendChild(endPoint);
}

function gameLoop() {
    if (gameOver) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGame();

    enemies = enemies.filter(enemy => enemy.active);
    enemies.forEach(enemy => enemy.move());
    towers.forEach(tower => tower.shoot(enemies));

    if (health <= 0) {
        gameOver = true;
        alert('Game Over!');
        return;
    }

    requestAnimationFrame(gameLoop);
}

function drawGame() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    enemies.forEach(enemy => enemy.draw());
    towers.forEach(tower => tower.draw());
}

function updateUI() {
    document.getElementById('money').textContent = money;
    document.getElementById('health').textContent = health;
}

// Initialization
resetGame();
