let time = document.getElementById("time");
let cont = 0,
  split = 0,
  secs = 0,
  mins = 0;

const startStopBtn = document.getElementById("startStop");
const resetBtn = document.getElementById("reset");

startStopBtn.addEventListener("click", () => {
  cont++;
});
resetBtn.addEventListener("click", () => {
  (time.innerHTML = "00:00:00"),
    (cont = 0),
    (split = 0),
    (secs = 0),
    (mins = 0);
});

const timer = setInterval(function () {
  split = parseInt(split);
  secs = parseInt(secs);
  mins = parseInt(mins);
  if (cont % 2 == 1) {
    split++;
  }
  if (split == 60) {
    split = 0;
    secs++;
  }
  if (secs == 60) {
    secs = 0;
    mins++;
  }
  if (cont !== 0) {
    if (split < 10 || split === 0) {
      split = "0"+ split;
    }
    if (secs < 10 || secs === 0) {
      secs = "0" + secs;
    }
    if (mins < 10 || mins === 0) {
      mins = "0" + mins;
    }
    time.innerHTML = mins + ":" + secs + ":" + split;
  }
}, 16.666666666666668);
