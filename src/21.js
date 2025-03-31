// Example: Simple countdown timer
let countDown = 10;
let timeLeft;

function startCountdown() {
    if (countDown > 0) {
        timeLeft = countDown;
        countDown--;
    } else {
        clearInterval(countDownTimer);
        endCountdown();
    }
}

startCountdown();

function endCountdown() {
    console.log(` countdown has ended in ${timeLeft} seconds.`);
}
