const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// function created to remove jumping clock hands did when they go from 59s to 0s
function handCorrector(hand_value, clock_hand) {
    if (hand_value === 0) {
        // Remove the transition property when the seconds reach 0
        clock_hand.style.transition = 'none';
        } else if (clock_hand.style.transition === 'none') {
        // Add the transition property back when the seconds change from 0
        clock_hand.style.transition = '';
    }      
}

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60) * 360) + 90;
    handCorrector(seconds, secondHand);      
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const min = now.getMinutes();
    const minDegrees = ((min/60) * 360) + 90;
    handCorrector(min, minHand)
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour/12) * 360) + 90;
    handCorrector(hour, hourHand)
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);