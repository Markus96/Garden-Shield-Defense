// script.js
document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-game');
    const helpButton = document.getElementById('help-button');
    const closeHelpButton = document.getElementById('close-help');
    const mainMenu = document.getElementById('main-menu');
    const gameContainer = document.getElementById('game-container');
    const helpPopup = document.getElementById('help-popup');
    const difficultyButtons = document.querySelectorAll('#difficulty-selection button');
    const startWaveButton = document.getElementById('startbutton');
    const resetButton = document.getElementById('resetbutton');
    const mapContainer = document.getElementById('map-container');
    const cashDisplay = document.getElementById('cash');
    const waveDisplay = document.getElementById('wave');
    let selectedTurret = null;
    let cash = 1000; // Example starting cash
    let wave = 0;
    let difficulty = 1;

    // Define path as an array of coordinates
    const path = [
        { x: 50, y: 50 },
        { x: 150, y: 50 },
        { x: 150, y: 200 },
        { x: 400, y: 200 },
        { x: 400, y: 400 },
        { x: 600, y: 400 },
        { x: 600, y: 600 }
    ];

    // Show game container and hide menu
    startButton.addEventListener('click', function() {
        mainMenu.classList.add('hidden');
        gameContainer.classList.remove('hidden');
        document.getElementById('difficulty-selection').classList.remove('hidden');
    });

    // Show help popup
    helpButton.addEventListener('click', function() {
        helpPopup.classList.remove('hidden');
    });

    // Close help popup
    closeHelpButton.addEventListener('click', function() {
        helpPopup.classList.add('hidden');
    });

    // Difficulty selection
    difficultyButtons.forEach(button => {
        button.addEventListener('click', function() {
            difficulty = parseInt(this.dataset.difficulty, 10);
            document.getElementById('difficulty-selection').classList.add('hidden');
            startWaveButton.classList.remove('hidden');
        });
    });

    // Start wave logic
    startWaveButton.addEventListener('click', function() {
        startWaveButton.classList.add('hidden');
        resetButton.classList.remove('hidden');
        wave++;
        waveDisplay.textContent = `Wave: ${wave}`;
        spawnEnemies(difficulty);
    });

    // Reset game
    resetButton.addEventListener('click', function() {
        location.reload();
    });

    // Turret placement
    mapContainer.addEventListener('click', function(e) {
        if (selectedTurret) {
            const rect = mapContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            if (cash >= parseInt(selectedTurret.dataset.cost, 10)) {
                const turretElement = document.createElement('div');
                turretElement.classList.add('turret');
                turretElement.style.left = `${x - 50}px`; // Center turret
                turretElement.style.top = `${y - 50}px`; // Center turret
                turretElement.style.backgroundImage = `url('/workspace/Garden-Shield-Defense/assets/imgs/${selectedTurret.id}.png')`;
                mapContainer.appendChild(turretElement);
                cash -= parseInt(selectedTurret.dataset.cost, 10);
                cashDisplay.textContent = `Cash: $${cash}`;
                selectedTurret = null;
            } else {
                alert('Not enough cash to place this turret.');
            }
        }
    });

    // Tower selection
    document.querySelectorAll('.turret').forEach(turret => {
        turret.addEventListener('click', function() {
            selectedTurret = this;
            console.log(`Selected turret: ${selectedTurret.id}`);
        });
    });

    // Spawn enemies and make them follow the path
    function spawnEnemies(difficulty) {
        const enemyCount = wave * difficulty;
        for (let i = 0; i < enemyCount; i++) {
            const enemy = document.createElement('div');
            enemy.classList.add('enemy');
            enemy.style.backgroundImage = `url('assests/img/plant-pot.png')`;
            enemy.style.width = '50px';
            enemy.style.height = '50px';
            enemy.style.position = 'absolute';

            // Place enemies at the start of the path
            const startPosition = path[0];
            enemy.style.left = `${startPosition.x}px`;
            enemy.style.top = `${startPosition.y}px`;
            mapContainer.appendChild(enemy);

            // Move enemies along the path
            moveEnemyAlongPath(enemy, 0);
        }
    }

    function moveEnemyAlongPath(enemy, pathIndex) {
        if (pathIndex >= path.length - 1) return;

        const currentPoint = path[pathIndex];
        const nextPoint = path[pathIndex + 1];

        let startX = currentPoint.x;
        let startY = currentPoint.y;
        let endX = nextPoint.x;
        let endY = nextPoint.y;

        let dx = endX - startX;
        let dy = endY - startY;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let speed = 100 / distance; // Adjust speed as needed

        let startTime = null;

        function animate(time) {
            if (!startTime) startTime = time;
            let progress = (time - startTime) * speed;
            if (progress > 1) progress = 1;

            let x = startX + dx * progress;
            let y = startY + dy * progress;

            enemy.style.left = `${x}px`;
            enemy.style.top = `${y}px`;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                moveEnemyAlongPath(enemy, pathIndex + 1);
            }
        }

        requestAnimationFrame(animate);
    }
});
