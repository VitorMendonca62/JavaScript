var resultado = document.getElementById("resultado")
var numeros;
var arrayNumeros = new Array()

function escreveNumero(numeroEscolhido) {
    arrayNumeros.push(numeroEscolhido)
    resultado.value += numeroEscolhido
}
function escreveDecimal() {
    if (resultado.value.length == 0) {
        resultado.value += "0."
    } else {
        resultado.value += "."
    }
}
function escreveOperadores(operador) {
    if (resultado.value.length == 0) {
        alert("[ERRO] Adicione um número")
    } else {
        resultado.value += operador
        arrayNumeros.push(operador) 
    }
}
function mostrarResultado() {
    if (resultado.value.length == 0) {
        alert("[ERRO] Adicione um número")
    } else {
        resultado.value = eval(resultado.value)
    }
}
function limparTela() {
    resultado.value = ""
}
function limparUltimoNumero() {
    if (resultado.value.length == 0) {
        alert("[ERRO] Adicione um número")
    } else {
        console.log(arrayNumeros)
        var ultimoNumero = arrayNumeros.pop()
        console.log(arrayNumeros)
        resultado.value = resultado.value.replace(ultimoNumero, "")
    }


}
