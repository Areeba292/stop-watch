let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

function pad(n, digits = 2) {
  return n.toString().padStart(digits, '0');
}

function updateDisplay() {
  let h = pad(hours);
  let m = pad(minutes);
  let s = pad(seconds);
  let ms = milliseconds.toString().padStart(3, '0');

  document.getElementById("display").innerText =
    h + " : " + m + " : " + s + " : " + ms;
}

const container = document.querySelector('.stopwatch');

function start() {
  if (timer !== null) return;
  container.classList.add('running');

  // Tick every 10ms for millisecond resolution (steps of 10ms)
  timer = setInterval(() => {
    milliseconds += 10;

    if (milliseconds >= 1000) {
      milliseconds = 0;
      seconds++;
    }

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    updateDisplay();
  }, 10);
}

function stop() {
  clearInterval(timer);
  timer = null;
  container.classList.remove('running');
}

function reset() {
  stop();
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  container.classList.remove('running');
  updateDisplay();
}

// Ensure display is correct on initial load
updateDisplay();
