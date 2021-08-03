var resultado = document.getElementById("resultado")
var dataHoje = new Date()
function interagirSistema() {
    resultado.innerHTML = `O que eu recebi do sistema foi ${dataHoje}`
}