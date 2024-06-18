function applyWhite() {
    var pianoKeys = document.querySelectorAll('.piano-key')
    for (var i = 0; i < pianoKeys.length; i++) {
        pianoKeys[i].style.animation = 'base-to-normal 1s ease forwards';
    }
}

function applyBlack() {
    var pianoKeys = document.querySelectorAll('.piano-key-black')
    for (var i = 0; i < pianoKeys.length; i++) {
        pianoKeys[i].style.animation = 'base-to-normal 1s ease forwards';
    }
}

function baseToNormal(){
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
    for (var i = 0; i < pianoKeys.length; i++) {
        var width = baseWidth + ((index - i) ** multipler);
        pianoKeys[i].style.width = width + 'px';
        pianoKeys[i].style.setProperty('--end-width', width + 'px');
    }
    var pianoKeys = document.querySelectorAll('.piano-key-black');
    var index = pianoKeys.length;
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
        var width = baseWidth + ((index - i) ** multipler);
        pianoKeys[i].style.width = width + 'px';
        pianoKeys[i].style.setProperty('--end-width', width + 'px');
    }
    applyWhite();
    applyBlack();
}

window.onload = function() {
    baseToNormal();
}