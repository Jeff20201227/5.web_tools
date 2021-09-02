import { formatError } from "./common.js";
import { setTimer } from "./timerCalc.js";

export const timerForm = document.forms.timer__form;

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const error = document.querySelector(".error");
const ring = new Audio("./src/assets/example.mp3");

start.addEventListener("click", startTime);
stop.addEventListener("click", stopTime);
reset.addEventListener("click", resetTime);

let timerId = null;

function startTime(e) {
  e.preventDefault();

  error.innerHTML = "";
  let time = timerForm.elements.time.value;

  if (time && !timerId) {
    timerId = setInterval(() => {
      const timer = setTimer(time);

      if (timer) {
        timerForm.elements.time.value = timer;
        time = timer;
      } else {
        clearInterval(timerId);
        ring.play();
      }
    }, 1000);
  } else if (timerId) {
    error.innerHTML = "Таймер уже запущен";
    setTimeout(() => (error.innerHTML = ""), 3000);
  } else {
    error.innerHTML = formatError("Введите время");
  };
};

function stopTime(e) {
  e.preventDefault();
  clearInterval(timerId);
  console.log(timerId);
  timerId = null;
  error.innerHTML = "";
  ring.pause();
};

function resetTime(e) {
  e.preventDefault();
  clearInterval(timerId);
  console.log(timerId);
  timerId = null;
  timerForm.elements.time.value = 0;
  error.innerHTML = "";
  ring.pause();
};