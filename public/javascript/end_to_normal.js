function applyWhite() {
    var pianoKeys = document.querySelectorAll('.piano-key')
    for (var i = 0; i < pianoKeys.length; i++) {
        pianoKeys[i].style.animation = 'end-to-normal 1.3s ease forwards';
    }
}

function applyBlack() {
    var pianoKeys = document.querySelectorAll('.piano-key-black')
    for (var i = 0; i < pianoKeys.length; i++) {
        pianoKeys[i].style.animation = 'end-to-normal-black 1s ease forwards';
    }
}

function endToNormal() {
    var pianoKeys = document.querySelectorAll('.piano-key');
    var index = pianoKeys.length;
    if (index < 4) {
        multipler = 4;
        baseWidth = 60;
    } else if (index >= 4 && index < 8) {
        multipler = 3;
        baseWidth = 60;
    } else {
        multipler = 2.4;
        baseWidth = 0;
    }
    for (var i = 0; i < index ; i++) {
        var width = baseWidth + ((index - i) ** multipler);
        // if (/CriOS/.test(navigator.userAgent)) {
        //     width = width - 50;
        // }
        pianoKeys[i].style.width = width + 'px';
        pianoKeys[i].style.setProperty('--end-width', width + 'px');
    }
    var pianoKeysBlack = document.querySelectorAll('.piano-key-black');
    var index = pianoKeysBlack.length;
    if (index < 4) {
        multipler = 2;
        baseWidth = 15;
    } else if (index >= 4 && index < 8) {
        multipler = 1.5;
        baseWidth = 0;
    } else {
        multipler = 2;
        baseWidth = 0;
    }
    for (var i = 0; i < index; i++) {
        var width = baseWidth + (((index - i) ** multipler));
        // if (/CriOS/.test(navigator.userAgent)) {
        //     width = width - 10;
        // }
        pianoKeysBlack[i].style.width = width + 'px';
        pianoKeysBlack[i].style.setProperty('--start-width', (width + 200) + 'px');
        pianoKeysBlack[i].style.setProperty('--end-width', width + 'px');
    }
    applyWhite();
    applyBlack();
}

window.onload = function() {
    endToNormal();
}