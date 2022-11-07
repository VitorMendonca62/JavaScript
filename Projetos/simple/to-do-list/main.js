const pegarPorID = (id) => document.getElementById(id);
const inputTarefa = pegarPorID("tarefa");
const inputPesquisa = pegarPorID("pesquisa");
const inputFiltro = pegarPorID("filtro");
const inputEdit = pegarPorID("edit-tarefa");
const divTarefas = pegarPorID("tarefas");
const divEditaTarefa = pegarPorID("edita-tarefa");
const divAddTask = pegarPorID("divAddTask");

const tarefas = [];

function adicionarTarefa() {
  const valorTarefa = inputTarefa.value;
  if (!valorTarefa) return false;
  const tarefa = {
    tarefa: valorTarefa,
    html: `
    <div id='${tarefas.length}'>
      <div>
        <p class='to-do'>${valorTarefa}</p>
      </div>
     <div>
        <i class='icons fa fa-check' aria-hidden='true' onclick='concluirTarefa(${tarefas.length})'></i>
        <i class='icons fa fa-pencil' aria-hidden='true' onclick='editarTarefa(${tarefas.length})'></i>
        <i class='icons fa fa-close' aria-hidden='true' onclick='excluirTarefa(${tarefas.length})'></i>
      </div>
    </div>
    `,
    status: "aFazer",
  };
  divTarefas.innerHTML += tarefa.html;
  tarefas.push(tarefa);
  inputTarefa.value = "";
  inputTarefa.focus();
}

function editarTarefa(id) {
  divTarefas.innerHTML = "";
  divEditaTarefa.style.display = "inline";
  divAddTask.style.display = "none";
  inputEdit.value = tarefas[id].tarefa;
  inputEdit.focus();
  document.location = url + `?id=${id}`;
}

function enviarEditTask() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const task = tarefas[id];
  const newTask = inputEdit.value;
  divAddTask.style.display = "inline";
  divEditaTarefa.style.display = "none";
  task.html = task.html.toString().replace(task.tarefa, newTask);
  task.tarefa = newTask;
  loadTasks();
}

function cancelarEditTask() {
  divAddTask.style.display = "inline";
  divEditaTarefa.style.display = "none";
  loadTasks()
}

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
    }
  });
}

function pesquisarTarefa() {
  divTarefas.innerHTML = "";
  const pesquisa = inputPesquisa.value;
  const filtro = inputFiltro.value;
  tarefas.forEach((elem) => {
    if (!elem.tarefa) return "";
    if (inputPesquisa.value == "" && filtro == "todos") {
      divTarefas.innerHTML += elem.html;
    }
    if (
      elem.tarefa.includes(pesquisa) &&
      pesquisa.length > 0 &&
      filtro == "todos"
    ) {
      divTarefas.innerHTML += elem.html;
    }
    if (elem.tarefa.includes(pesquisa) && elem.status.includes(filtro)) {
      divTarefas.innerHTML += elem.html;
    }
  });
}

const excluirPesquisa = () => {
  inputPesquisa.value = "";
  pesquisarTarefa();
};

function loadTasks() {
  console.log(tarefas);
  tarefas.forEach((elem) => (divTarefas.innerHTML += elem.html));
}

document.addEventListener("keydown", teclaPressionada);
inputPesquisa.addEventListener("keyup", pesquisarTarefa);
inputFiltro.addEventListener("change", pesquisarTarefa);

function teclaPressionada(event) {
  const tecla = event.key;

  if (tecla === "Enter") {
    adicionarTarefa();
  }
}
