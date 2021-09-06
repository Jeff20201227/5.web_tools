export function setTimer(time) {
  const countArr = time.split(":");
  let hours = +countArr[0];
  let minutes = +countArr[1];
  let seconds = +countArr[2];

  if (seconds > 0) {
    seconds--;
    return `${
      plusNull(hours) + ":" + plusNull(minutes) + ":" + plusNull(seconds)
    }`;
  } else if (minutes > 0) {
    minutes -= 1;
    seconds = 59;
    return `${
      plusNull(hours) + ":" + plusNull(minutes) + ":" + plusNull(seconds)
    }`;
  } else if (hours > 0) {
    hours -= 1;
    minutes = 59;
    seconds = 59;
    return `${
      plusNull(hours) + ":" + plusNull(minutes) + ":" + plusNull(seconds)
    }`;
  } else return null;
}

function plusNull(num) {
  if (num < 10 && num != 0) {
    return `${"0" + num}`;
  } else if (num == 0) {
    return `00`;
  } else return num;
}
