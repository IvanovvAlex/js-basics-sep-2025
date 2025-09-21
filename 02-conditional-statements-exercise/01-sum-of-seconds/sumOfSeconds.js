function sumOfSeconds(sec1, sec2, sec3) {
  let totalSeconds = sec1 + sec2 + sec3;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  // seconds = 190
  // seconds / 60 = 3
  // seconds % 60 = 10 (the difference from 190 - (seconds / 60))

  if (seconds < 10) {
    return `${minutes}:0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

console.log(sumOfSeconds(35, 45, 44));
