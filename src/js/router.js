import { dateCalcForm } from "./datecalc.js";
import { timerForm } from "./timer.js";
import { toggleRoutes } from "./common.js";

const dateCalc = document.querySelector(".datecalc");
const timer = document.querySelector(".timer");

dateCalc.addEventListener("click", () => toggleRoutes(timerForm, dateCalcForm));
timer.addEventListener("click", () => toggleRoutes(dateCalcForm, timerForm));
