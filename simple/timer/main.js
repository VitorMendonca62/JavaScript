const txtMilisegundos = document.getElementById("milisegundos");
const txtSegundos = document.getElementById("segundos");
const txtMinutos = document.getElementById("minutos");
const txtMarcarTempo = document.getElementById("marcarTempo");

let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let interval;

function iniciarCronometro() {
  if (milisegundos >= 100) {
    milisegundos = 0;
    segundos++;
  }
  if (segundos == 60) {
    segundos = 0;
    minutos++;
  }
  txtMilisegundos.innerHTML =
    milisegundos < 10 ? "0" + milisegundos++ : milisegundos++;
  txtSegundos.innerHTML = segundos < 10 ? "0" + segundos : segundos;
  txtMinutos.innerHTML = minutos < 10 ? "0" + minutos : minutos;
}
function pararCronometro() {
  clearInterval(interval);
}
function ligarCronometro() {
  clearInterval(interval);
  interval = setInterval(iniciarCronometro, 10);
}
function resetarCronometro() {
  segundos = 0;
  milisegundos = 0;
  minutos = 0;
  txtMilisegundos.innerHTML = "0" + milisegundos;
  txtSegundos.innerHTML = "0" + segundos;
  txtMinutos.innerHTML = "0" + minutos;
  clearInterval(interval);
}

function marcarTempo() {
  txtMarcarTempo.innerHTML += `
  ${minutos < 10 ? "0" + minutos : minutos} :
  ${segundos < 10 ? "0" + segundos : segundos} . 
  ${milisegundos < 10 ? "0" + milisegundos : milisegundos}
  <br>`;
}
