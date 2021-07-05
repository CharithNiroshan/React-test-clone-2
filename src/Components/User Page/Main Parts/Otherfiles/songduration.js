function msToTime(ms) {
  var s = Math.floor(ms / 1000);
  var secs = s % 60;
  var mins = Math.floor(s / 60);

  if (secs < 10) {
    return mins + ":0" + secs;
  } else {
    return mins + ":" + secs;
  }
}

export default msToTime;
