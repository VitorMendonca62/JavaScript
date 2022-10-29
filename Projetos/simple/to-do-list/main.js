const pegarPorID = (id) => document.getElementById(id);
const inputTarefa = pegarPorID("tarefa");
const inputPesquisa = pegarPorID("pesquisa");
const inputFiltro = pegarPorID("filtro");
const divTarefas = pegarPorID("tarefas");

const tarefas = [];

function adicionarTarefa() {
  const valorTarefa = inputTarefa.value;
  if (!valorTarefa) return false;
  const tarefa = {
    tarefa: valorTarefa,
    html: `
    <div id="${tarefas.length}">
      <div>
        <p class="to-do">${valorTarefa}</p>
      </div>
     <div>
        <i class="icons fa fa-check" aria-hidden="true" onclick="concluirTarefa(${tarefas.length})"></i>
        <i class="icons fa fa-pencil" aria-hidden="true" onclick="editarTarefa(${tarefas.length})"></i>
        <i class="icons fa fa-close" aria-hidden="true" onclick="excluirTarefa(${tarefas.length})"></i>
      </div>
    </div>
    `,
    status: "aFazer",
  };

  tarefas.push(tarefa);
  divTarefas.innerHTML += tarefa.html;
  inputTarefa.value = "";
  inputTarefa.focus();
}

function editarTarefa() {}
function concluirTarefa(id) {
  const elemTarefas = [...divTarefas.children];
  elemTarefas.forEach((elem) => {
    if (elem.id == id) {
      elem.classList[0] === "concluido"
        ? (tarefas[id].status = "aFazer")
        : (tarefas[id].status = "feito");
      elem.classList.toggle("concluido");
      tarefas[id].html = elem.outerHTML;
    }
  });
}

function excluirTarefa(id) {
  const elemTarefas = [...divTarefas.children];
  elemTarefas.forEach((elem) => {
    if (elem.id == id) {
      elem.style.display = "none";
      elem.innerHTML = "";
    }
  });
  tarefas[id] = "nulsl";
}
function pesquisarTarefa() {
  divTarefas.innerHTML = "";
  const pesquisa = inputPesquisa.value;
  const filtro = inputFiltro.value;

  tarefas.forEach((elem) => {
    if (!elem.tarefa) return " a ";
    console.log(elem);
    console.log(elem.tarefa.includes(pesquisa));
    console.log(filtro == "todos");
    if (elem.tarefa.includes(pesquisa) && filtro == "todos") {
      divTarefas.innerHTML += elem.html;
    }
    if (elem.tarefa.includes(pesquisa) && elem.status.includes(filtro)) {
      divTarefas.innerHTML += elem.html;
    }
    if (inputPesquisa.value == "" && filtro == "todos") {
      divTarefas.innerHTML = "";
      divTarefas.innerHTML += elem.html;
    }
  });
}

const excluirPesquisa = () => {
  inputPesquisa.value = "";
  pesquisarTarefa();
};

document.addEventListener("keydown", teclaPressionada);
inputPesquisa.addEventListener("keyup", pesquisarTarefa);
inputFiltro.addEventListener("change", pesquisarTarefa);

function teclaPressionada(event) {
  const tecla = event.key;

  if (tecla === "Enter") {
    adicionarTarefa();
  }
}
