const panels = document.querySelectorAll('.panel')

// Solution #1
panels.forEach ( panel => {
    panel.addEventListener('click', () => {
        panel.classList.toggle('open-active')
        panel.classList.toggle('open')
    })
})


// Solution #2
// function toggleOpen() {
//     this.classList.toggle('open');
// };

// function toggleActive(e) {
//     if (e.propertyName.includes('flex')) {
//         this.classList.toggle('open-active')
//     }
// }

// panels.forEach( panel => panel.addEventListener('click', toggleOpen));
// panels.forEach( panel => panel.addEventListener('transitionend', toggleActive));