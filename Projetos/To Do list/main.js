var caixaPrincipal = document.getElementById("caixas")
var vezDaCaixa = 0
var arrayCaixas = new Array()
var txtTarefa = document.getElementById("input-tarefas")
var jaFoi = false

txtTarefa.addEventListener("keypress", adicionarComTeclado);

function adicionarTarefa() {
    var txtTarefa = document.getElementById("input-tarefas")
    var tarefa = txtTarefa.value

    if (tarefa.length == 0) {
        alert("Digite alguma tarefa!")
    } else if (verificarSePossui(vezDaCaixa, tarefa) == true) {
        alert("Essa tarefa já existe, tente outra")
    } else {
        var tarefaAgora = `<div class="caixa" >
                        <p onclick = "mudarCor(${vezDaCaixa})" style=width: 100px; text-align: left;>${tarefa}</p>
                        <p class = "x" onclick = "excluirTarefa(${vezDaCaixa},'${tarefa}')">X</p>
                       </div>`

        caixaPrincipal.innerHTML += tarefaAgora
        arrayCaixas.push(tarefa)
        vezDaCaixa++
        txtTarefa.focus()
        txtTarefa.value = ""
    }
}
function excluirTarefa(caixa, tarefa) {
    var caixaRemovida = document.getElementsByClassName("caixa")[caixa]
    caixaRemovida.setAttribute("class", "caixa hidden")
    var index = arrayCaixas.indexOf(tarefa)
    if ( index > -1) {
        arrayCaixas.splice(index, 1);
      }
}
function mudarCor(caixa) {
    if (jaFoi == false) {
        var aa = document.getElementsByClassName("caixa")[caixa]
        aa.setAttribute("class", "caixa verde")
        jaFoi = true
    } else {
        var aa = document.getElementsByClassName("caixa")[caixa]
        aa.setAttribute("class", "caixa")
        jaFoi = false
    }

}
function verificarSePossui(caixa, tarefa) {
    if (arrayCaixas.indexOf(tarefa) != -1) {
        return true
    }
} 
function adicionarComTeclado(){
    if(event.which === 13){
        adicionarTarefa();
    }
}