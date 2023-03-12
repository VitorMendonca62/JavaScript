const container = document.getElementsByClassName("container")[0];

const cards = [
  "fa-brands fa-youtube",
  "fa-brands fa-youtube",
  "fa-brands fa-whatsapp",
  "fa-brands fa-whatsapp",
  "fa-brands fa-github",
  "fa-brands fa-github",
  "fa-brands fa-figma",
  "fa-brands fa-figma",
  "fa-brands fa-playstation",
  "fa-brands fa-playstation",
  "fa-brands fa-spotify",
  "fa-brands fa-spotify",
  "fa-brands fa-stack-overflow",
  "fa-brands fa-stack-overflow",
  "fa-brands fa-twitter",
  "fa-brands fa-twitter",
  "fa-brands fa-instagram",
  "fa-brands fa-instagram",
  "fa-brands fa-google",
  "fa-brands fa-google",
  "fa-brands fa-facebook",
  "fa-brands fa-facebook",
  "fa-brands fa-android",
  "fa-brands fa-android",
];

const posicaoCards = [];
const numerosRepetidos = [];
const min = 0;
const max = cards.length;

function sortearNumeroAleatorio(min, max) {
  min > max ? ([min, max] = [max, min]) : false;
  return Math.floor(Math.random() * (max - min) + min);
}

function carregarCards() {
  cards.forEach((card, i) => {
    let numeroAleatorio = sortearNumeroAleatorio(min, max);

    while (numerosRepetidos.indexOf(numeroAleatorio) !== -1) {
      numeroAleatorio = sortearNumeroAleatorio(min, max);
    }
    if (numerosRepetidos.indexOf(numeroAleatorio) == -1) {
      numerosRepetidos.push(numeroAleatorio);
      container.innerHTML += `
          <div class="card" id="${i}">
            <div class="carder">
              <div class="front">
                <span></span>
              </div>
              <div class="back">
                <i class="${cards[numeroAleatorio]}"></i>
              </div>
            </div>
          </div>
        `;
    }
  });
  carregarConfigCards();
}

document.addEventListener("load", carregarCards());

let quantasCardsGiradaos = 0;
let quantasCardsJáEncontradas = 0;
const cardsJaEncontrados = [];

function verificarCards() {
  const card01 = document.getElementById(posicaoCards[0]);
  const card02 = document.getElementById(posicaoCards[1]);
  const classCard1 = card01.querySelector(".back>i").className;
  const classCard2 = card02 ? card02.querySelector(".back>i").className : "";
  cardsJaEncontrados.push(card01, card02);

  classCard1 === classCard2 ? encontrouCarta() : errouCarta(card01, card02);
}

function errouCarta(...args) {
  args.forEach((card, i) => {
    if (card.querySelector(".front").classList[1] == "blue") {
      card.children[0].style.transform = "rotateY(180deg)";
      console.log("foi")
      return "";
    }
    setTimeout(() => {
      card.children[0].style.transform = "rotateY(0deg)";
    }, 1000);
    quantasCardsGiradaos = 0;
    posicaoCards.pop();
    cardsJaEncontrados.pop();
  });
}
function encontrouCarta() {
  quantasCardsJáEncontradas += 2;
  quantasCardsGiradaos = 0;
  cardsJaEncontrados.forEach((card) => {
    setTimeout(() => {
      card.children[0].style.transform = "rotateY(180deg)";
      card.querySelector(".front").style.background = "blue";
      card.querySelector(".front").classList += " blue";
      card.querySelector(".back").style.background = "blue";
      posicaoCards.pop();
      cardsJaEncontrados.pop();
    }, 200);
  });
}

function girarCard(card) {
  if (posicaoCards.indexOf(card.id) !== -1) {
    return "";
  }

  card.children[0].style.transform = "rotateY(180deg)";
  posicaoCards.push(card.id);
  quantasCardsGiradaos++;
  quantasCardsGiradaos === 2 ? verificarCards() : false;
}

function carregarConfigCards() {
  const cardsTransform = [...document.querySelectorAll(".card")];
  cardsTransform.forEach((card) =>
    card.addEventListener("click", () => girarCard(card))
  );
}
