const caixaPrincipal = document.getElementById("caixas");
const arrayCaixas = new Array();
const txtTarefa = document.getElementById("input-tarefas");

txtTarefa.addEventListener("keypress", adicionarComTeclado);

function adicionarTarefa() {
  const txtTarefa = document.getElementById("input-tarefas");
  const tarefa = txtTarefa.value;

  if (tarefa.length == 0) {
    alert("Digite alguma tarefa!");
  } else if (verificarSePossui(tarefa) == true) {
    alert("Essa tarefa já existe, tente outra");
  } else {
    arrayCaixas.push(tarefa);
    const indexCaixa = arrayCaixas.indexOf(tarefa);
    const htmlTarefa = `
    <div id="${indexCaixa}" class="caixa" onclick="mudarCor(${indexCaixa})">
      <p style="width: " 100px; text-align: left;>${tarefa}</p>
      <p class="x" onclick="excluirTarefa(${indexCaixa},'${tarefa}')">X</p>
    </div>

    `;

    caixaPrincipal.innerHTML += htmlTarefa;
    txtTarefa.focus();
    txtTarefa.value = "";
  }
}

function excluirTarefa(caixa, tarefa) {
  const caixaRemovida = document.getElementsByClassName("caixa")[caixa];
  caixaRemovida.setAttribute("class", "caixa hidden");
  const index = arrayCaixas.indexOf(tarefa);
  index > -1 ? arrayCaixas.splice(index, 1) : false;
}

function mudarCor(caixa) {
  const elemCaixa = document.getElementById(caixa);

  elemCaixa.classList.length === 1
    ? elemCaixa.setAttribute("class", "caixa verde")
    : elemCaixa.setAttribute("class", "caixa");
}

function verificarSePossui(tarefa) {
  return arrayCaixas.indexOf(tarefa) != -1;
}

function adicionarComTeclado() {
  if (event.which === 13) {
    adicionarTarefa();
  }
}
