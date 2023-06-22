function playSound(e) {
    const audio = document.querySelector(`audio[data-keyboard-key=${e.key}]`)
    const key = document.querySelector(`.key[data-keyboard-key=${e.key}]`)
    if (!audio) return;     // stops the function on running altogether on wrong inputs
    audio.currentTime = 0;   // rewinds to the start
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach( key => key.addEventListener('transitionend', removeTransition));
window.addEventListener( 'keydown', playSound);
