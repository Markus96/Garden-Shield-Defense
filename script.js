document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");

    document.getElementById('basicTowerBtn').addEventListener('click', () => {
        console.log('Basic Tower button clicked');
        // Example code to handle button click
    });

    document.getElementById('fastTowerBtn').addEventListener('click', () => {
        console.log('Fast Tower button clicked');
        // Example code to handle button click
    });

    document.getElementById('strongTowerBtn').addEventListener('click', () => {
        console.log('Strong Tower button clicked');
        // Example code to handle button click
    });

    document.getElementById('easyBtn').addEventListener('click', () => {
        console.log('Easy button clicked');
        // Example code to handle button click
    });

    document.getElementById('mediumBtn').addEventListener('click', () => {
        console.log('Medium button clicked');
        // Example code to handle button click
    });

    document.getElementById('hardBtn').addEventListener('click', () => {
        console.log('Hard button clicked');
        // Example code to handle button click
    });

    document.getElementById('startBtn').addEventListener('click', () => {
        console.log('Start button clicked');
        // Example code to handle button click
    });

    document.getElementById('resetBtn').addEventListener('click', () => {
        console.log('Reset button clicked');
        // Example code to handle button click
    });

    document.getElementById('instructionsBtn').addEventListener('click', () => {
        console.log('Instructions button clicked');
        document.getElementById('instructions').classList.remove('hidden');
    });

    document.querySelector('#instructions .close').addEventListener('click', () => {
        document.getElementById('instructions').classList.add('hidden');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded");

    const basicTowerBtn = document.getElementById('basicTowerBtn');
    console.log(basicTowerBtn); // Check if element is found

    if (basicTowerBtn) {
        basicTowerBtn.addEventListener('click', () => {
            console.log('Basic Tower button clicked');
        });
    } else {
        console.error('Basic Tower button not found');
    }
});

