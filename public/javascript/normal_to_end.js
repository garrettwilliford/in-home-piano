function normalToEnd(event) {
    event.preventDefault();
    var pianoKeys = document.querySelectorAll('.piano-key');
    for (var i = 0; i < pianoKeys.length; i++) {
        pianoKeys[i].style.animation = 'normal-to-end .7s ease forwards';
        pianoKeys[i].style.setProperty('--start-width', pianoKeys[i].style.width);
    }
    var pianoKeysBlack = document.querySelectorAll('.piano-key-black');
    var newWidth;
    for (var i = 0; i < pianoKeysBlack.length; i++) {
        pianoKeysBlack[i].style.animation = 'normal-to-end-black 1s ease forwards';
        pianoKeysBlack[i].style.setProperty('--start-width', pianoKeysBlack[i].style.width);
        newWidth = (parseInt(pianoKeysBlack[i].style.width) + 200);
        pianoKeysBlack[i].style.setProperty('--end-width', newWidth + 'px');
        pianoKeysBlack[i].style.width = newWidth + 'px';
    }
    var textContainer = document.querySelector('.text-container');
    textContainer.style.animation = 'text-container-fade 1s ease';
    textContainer.style.opacity = 0;
    setTimeout(function() {
        var target = event.target;
        if (target.tagName === 'BUTTON') {
            target = target.parentElement;
        }
        if (target.hasAttribute('href')) {
            window.location.href = target.href;
        } else {
            window.location.href = target.parentElement.href;
        }
    }, 1000);
}