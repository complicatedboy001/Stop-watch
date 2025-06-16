let [millisecond, second, minutes, hours] = [0, 0, 0, 0];
let timewatch = document.querySelector('.timer-display');
let int = null;

document.getElementById('start-timer').addEventListener('click', () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById('pause-timer').addEventListener('click', () => {
    clearInterval(int);
});

document.getElementById('reset-timer').addEventListener('click', () => {
    clearInterval(int);
    [millisecond, second, minutes, hours] = [0, 0, 0, 0];
    timewatch.innerHTML = "00:00:00:000";
});

function displayTimer() {
    millisecond += 10;
    if (millisecond === 1000) {
        millisecond = 0;
        second++;
        if (second === 60) {
            second = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = second < 10 ? "0" + second : second;
    let ml = millisecond < 10 ? "00" + millisecond : millisecond < 100 ? "0" + millisecond : millisecond;

    timewatch.innerHTML = `${h}:${m}:${s}:${ml}`;
}
