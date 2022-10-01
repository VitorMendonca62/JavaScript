const casa01 = document.getElementById("casa-1x1");
const casa02 = document.getElementById("casa-1x2");
const casa03 = document.getElementById("casa-1x3");
const casa04 = document.getElementById("casa-2x1");
const casa05 = document.getElementById("casa-2x2");
const casa06 = document.getElementById("casa-2x3");
const casa07 = document.getElementById("casa-3x1");
const casa08 = document.getElementById("casa-3x2");
const casa09 = document.getElementById("casa-3x3");
let jogador = 1;

const arrayCasas = new Array(
  casa01,
  casa02,
  casa03,
  casa04,
  casa05,
  casa06,
  casa07,
  casa08,
  casa09
);
const casasJaSelecionadas = new Array();

function colocarSimbolo(casa) {
  const casaSelecionada = arrayCasas[casa];
  if (casasJaSelecionadas.indexOf(casaSelecionada) == -1) {
    casasJaSelecionadas.push(casaSelecionada);

    if (jogador === 1) {
      casaSelecionada.innerHTML = "X";
      arrayCasas[casa].value = "X";
      console.log(arrayCasas);
      jogador++;
      conferirVitoria("X");
    } else if (jogador == 2) {
      casaSelecionada.innerHTML = "O";
      arrayCasas[casa].value = "O";
      jogador--;
      conferirVitoria("O");
    }
  } else {
    alert("CASA JÁ SELECIONADA");
  }
}

function conferirVitoria(simbolo) {
  if (
    arrayCasas[6].value == simbolo &&
    arrayCasas[4].value == simbolo &&
    arrayCasas[2].value == simbolo
  ) {
    alert(`${simbolo} venceu!`); // Vitoria Diagonal
    setTimeout(() => {
      resetJogo();
    }, 2000);
  }
  if (
    arrayCasas[0].value == simbolo &&
    arrayCasas[4].value == simbolo &&
    arrayCasas[8].value == simbolo
  ) {
    alert(`${simbolo} venceu!`); // Vitoria Diagonal
    setTimeout(() => {
      resetJogo();
    }, 2000);
  }
  for (let i = 0; i <= 2; i++) {
    // Vitoria linhas
    if (
      arrayCasas[i].value == simbolo &&
      arrayCasas[i + 3].value == simbolo &&
      arrayCasas[i + 6].value == simbolo
    ) {
      alert(`${simbolo} venceu!`);
      setTimeout(() => {
        resetJogo();
      }, 2000);
    }
  }
  for (let i = 0; i <= 6; i += 3) {
    // Vitoria colunas
    if (
      arrayCasas[i].value == simbolo &&
      arrayCasas[i + 1].value == simbolo &&
      arrayCasas[i + 2].value == simbolo
    ) {
      alert(`${simbolo} venceu!`);
      setTimeout(() => {
        resetJogo();
      }, 2000);
    }
  }
}

function resetJogo() {
  for (var i = 0; i <= 8; i++) {
    arrayCasas[i].value = " ";
    arrayCasas[i].innerHTML = " ";
  }
  const tamanhoCasasJaSelecionadas = casasJaSelecionadas.length;
  for (var i = 1; i <= tamanhoCasasJaSelecionadas; i++) {
    casasJaSelecionadas.pop();
  }
}
