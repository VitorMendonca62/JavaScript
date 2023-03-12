function carregarRelogio() {
  const data = new Date();
  let hor = data.getHours();
  let min = data.getMinutes();
  let sec = data.getSeconds();
  let session = "AM";
  const clock = document.getElementById("clock");
  hor == 0 ? (hor = 12) : false;

  hor > 12 ? ((hor -= 12), (session = "PM")) : false;

  hor = hor < 10 ? "0" + hor : hor;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  clock.innerHTML = hor + ":" + min + ":" + sec + " " + session;
  setTimeout(carregarRelogio, 1000);
}
