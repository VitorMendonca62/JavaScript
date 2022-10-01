const audio = document.getElementById("audio");
const progresso = document.getElementById("progresso");

const nome = document.getElementById("nome");
const cantor = document.getElementById("cantor");
const capa = document.getElementById("capa");

const musicas = [
  {
    nome: "Ride",
    cantor: "Lana del rey",
    src: "./music/ride.mpeg",
    path: "./imgs/ride.jpg",
  },
  {
    nome: "Little boy in the grass",
    cantor: "Aurora",
    src: "./music/little-boy-in-the-grass.mpeg",
    path: "./imgs/little-boy-in-the-grass.jpg",
  },
  {
    nome: "I was never there",
    cantor: "The weeknd",
    src: "./music/i-was-never-there.mpeg",
    path: "./imgs/i-was-never-there.jpg",
  },
];

const elemInicio = document.getElementsByClassName("inicio")[0];
const elemFim = document.getElementsByClassName("fim")[0];

let indexMusica = 0;
let interval;

function configurarPlayer() {
  nome.innerText = musicas[indexMusica].nome;
  cantor.innerText = musicas[indexMusica].cantor;
  capa.src = musicas[indexMusica].path;
  audio.src = musicas[indexMusica].src;

  setTimeout(() => {
    const duracao = audio.duration.toFixed(2);
    const minutos = Math.trunc(duracao / 60);
    const segundos = (duracao % 60).toFixed(0);
    elemFim.innerText = `${minutos}:${
      segundos < 10 ? "0" + segundos : segundos
    }`;
  }, 80);
}

function mostrarProgresso() {
  const tempoTotal = audio.duration;
  const tempoAtual = audio.currentTime;

  const minutos = Math.trunc(tempoAtual / 60);
  const segundos = (tempoAtual % 60).toFixed(0);

  elemInicio.innerText = `${minutos}:${
    segundos < 10 ? "0" + segundos : segundos
  }`;
  progresso.value = tempoAtual / tempoTotal;
}

const buttonPlay = document.querySelector("#play");
const buttonPause = document.querySelector("#pause");
buttonPause.style.display = "none";

const playAudio = (e) => {
  audio.play();
  clearInterval(interval);

  interval = setInterval(() => {
    mostrarProgresso();
  }, 100);

  buttonPlay.style.display = "none";
  buttonPause.style.display = "inline";
};

const pauseAudio = (e) => {
  audio.pause();
  clearInterval(interval);

  buttonPause.style.display = "none";
  buttonPlay.style.display = "inline";
};

document.querySelector("#next").onclick = (e) => {
  indexMusica++;
  indexMusica = indexMusica === musicas.length ? 0 : indexMusica;
  configurarPlayer();
  playAudio();
};

document.querySelector("#back").onclick = (e) => {
  indexMusica--;
  indexMusica = indexMusica < 0 ? musicas.length - 1 : indexMusica;
  configurarPlayer();
  playAudio();
};

buttonPlay.addEventListener("click", playAudio);
buttonPause.addEventListener("click", pauseAudio);
