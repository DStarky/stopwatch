const minutesBlock = document.querySelector(".js-minutes"),
  secondsBlock = document.querySelector(".js-seconds"),
  hundredthsSecondBlock = document.querySelector(".js-hundredths-second"),
  btnStart = document.querySelector(".js-btn-start"),
  btnStop = document.querySelector(".js-btn-stop"),
  btnReset = document.querySelector(".js-btn-reset");

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function startTimer() {
  milliseconds++;
  milliseconds <= 99
    ? (hundredthsSecondBlock.innerHTML = String(milliseconds).padStart(2, "0"))
    : (hundredthsSecondBlock.innerHTML = "00");

  if (milliseconds > 99) {
    milliseconds = 0;
    seconds++;
    seconds <= 59
      ? (secondsBlock.innerHTML = String(seconds).padStart(2, "0"))
      : (secondsBlock.innerHTML = "00");
  }
  if (seconds > 59) {
    seconds = 0;
    minutes++;
    minutes <= 59
      ? (minutesBlock.innerHTML = String(minutes).padStart(2, "0"))
      : (minutesBlock.innerHTML = "00");
  }
}

btnStart.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});
btnStop.addEventListener("click", () => {
  clearInterval(interval);
});
btnReset.addEventListener("click", () => {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  minutesBlock.innerHTML = "00";
  secondsBlock.innerHTML = "00";
  hundredthsSecondBlock.innerHTML = "00";
});
