
//_ ████████████████████████████████████  FUNCTIONS

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = (seconds / 60) * 360;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;


    console.log(seconds);

}

//_$ ████████████████████████████████████  QUERY SELECTORS

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

//>  ████████████████████████████████████  REAL PROGRAM

setInterval(setDate, 1000);