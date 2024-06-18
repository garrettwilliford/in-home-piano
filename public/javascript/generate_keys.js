function generateWhiteKeys() {
    var screenHeight = window.innerHeight;
    var container = document.querySelector('.white-keys');
    var numberOfKeys = Math.floor(screenHeight / 50) - 1;
    for (var i = 1; i < numberOfKeys; i++) {
        var pianoKey = document.createElement('div');
        pianoKey.classList.add('piano-key');
        container.appendChild(pianoKey);
    }
}

function generateBlackKeys() {
    var screenHeight = window.innerHeight;
    var container = document.querySelector('.black-keys');
    var numberOfKeys = Math.floor(screenHeight / 50);
    for (var i = 1; i < numberOfKeys + 1; i++) {
        var pianoKey = document.createElement('div');
        pianoKey.classList.add('piano-key-black');
        if (i == 1 || (i - 1) % 7 == 0) {
            pianoKey.style.opacity = 0;
        }
        if (i == 5 || (i - 5) % 7 == 0) {
            pianoKey.style.opacity = 0;
        }
        container.appendChild(pianoKey);
    }
}

generateWhiteKeys();
generateBlackKeys();
