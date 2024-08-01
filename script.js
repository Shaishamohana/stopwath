let stopwatchInterval;
let startTime;
let elapsedTime = 0;

document.getElementById('start-button').addEventListener('click', startStopwatch);
document.getElementById('stop-button').addEventListener('click', stopStopwatch);
document.getElementById('reset-button').addEventListener('click', resetStopwatch);
document.getElementById('background-style').addEventListener('change', changeBackgroundStyle);

function startStopwatch() {
    startTime = new Date().getTime();
    stopwatchInterval = setInterval(updateStopwatch, 10);
    document.getElementById('start-button').disabled = true;
    document.getElementById('stop-button').disabled = false;
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    document.getElementById('start-button').disabled = false;
    document.getElementById('stop-button').disabled = true;
}

function resetStopwatch() {
    elapsedTime = 0;
    document.getElementById('stopwatch-display').innerText = '00:00:00';
    stopStopwatch();
}

function updateStopwatch() {
    let currentTime = new Date().getTime();
    elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime / 3600000);
    let minutes = Math.floor((elapsedTime % 3600000) / 60000);
    let seconds = Math.floor((elapsedTime % 60000) / 1000);
    let milliseconds = elapsedTime % 1000;
    document.getElementById('stopwatch-display').innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, 3)}`;
}

function pad(number, length = 2) {
    return String(number).padStart(length, '0');
}

function changeBackgroundStyle() {
    let selectedStyle = document.getElementById('background-style').value;
    document.body.className = selectedStyle;
}