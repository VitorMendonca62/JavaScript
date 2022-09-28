const questoes = [
  {
    questao: "Quais stacks o Javascript pode atuar?",
    respostas: {
      a: "Front-end",
      b: "Back-end",
      c: "Deselvovimento mobile",
      d: "Todas as stacks",
    },
    alternativaCorreta: "d",
  },
  {
    questao: "Quem criou o Javascript",
    respostas: {
      a: "Bill Gates",
      b: "Brendan Eich",
      c: "Gustavo Guanabara",
      d: "Steve Jobs",
    },
    alternativaCorreta: "b",
  },
  {
    questao: "Quando o Javascript foi criado?",
    respostas: {
      a: "1994",
      b: "1990",
      c: "1995",
      d: "1993",
    },
    alternativaCorreta: "c",
  },
  {
    questao: "Qual é um framework do Javascript?",
    respostas: {
      a: "NodeJS",
      b: "ReactJS",
      c: "Spring",
      d: "Django",
    },
    alternativaCorreta: "a",
  },
];
const elem_questao = document.getElementById("questao");
const desempenho = document.getElementById("desempenho");
let numeroQuestao = 0;
let pontuacao = 0;

function mostrarQuestao(numeroQuestao) {
  const questao = questoes[numeroQuestao];
  elem_questao.innerHTML = `  
  <h2 id="${numeroQuestao}"><span id="indiceQuestao">${
    numeroQuestao + 1
  }</span> ${questao.questao}</h2>
  <div id="alternativas">
  <input type="button" onclick='verificarResposta("a")' name="questao${numeroQuestao}" value="${
    questao.respostas.a
  }">
  <input type="button" onclick='verificarResposta("b")' name="questao${numeroQuestao}" value="${
    questao.respostas.b
  }">
  <input type="button" onclick='verificarResposta("c")' name="questao${numeroQuestao}" value="${
    questao.respostas.c
  }">
  <input type="button" onclick='verificarResposta("d")' name="questao${numeroQuestao}" value="${
    questao.respostas.d
  }">
  </div>  
  `;
  desempenho.innerHTML = `Questão ${numeroQuestao + 1} de ${questoes.length}`;
}
mostrarQuestao(0);

function verificarResposta(resposta) {
  const questao = questoes[numeroQuestao];
  const respostaCorreta = questao.alternativaCorreta;
  if (resposta === respostaCorreta) {
    pontuacao += 20;
  }
  numeroQuestao++;
  proximaTela(numeroQuestao);
}

const proximaTela = (numeroQuestao) =>
  numeroQuestao === questoes.length
    ? mostrarTelaConclusiva()
    : mostrarQuestao(numeroQuestao);

function mostrarTelaConclusiva() {
  elem_questao.innerHTML = "";
  elem_questao.style.display = "none";
  const telaInicio = document.getElementById("telaInicio");
  telaInicio.innerText = "Fim de jogo!";
  desempenho.innerText = `Você conseguiu ${pontuacao} pontos, parabéns!`;

  setTimeout(() => {
    location.reload();
  }, 10000);
}
