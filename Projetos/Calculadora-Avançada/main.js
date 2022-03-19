const resultado = document.getElementById("resultado")
const arrayNumeros = new Array()

function escreveNumero(numeroEscolhido) {
    arrayNumeros.push(numeroEscolhido)
    resultado.value += numeroEscolhido
}
const escreveDecimal = () => resultado.value.length === 0 ? resultado.value += "0." : resultado.value += "."
    
function escreveOperadores(operador) {
    if (resultado.value.length === 0) {
        alert("[ERRO] Adicione um número")
    } else {
        resultado.value += operador
        arrayNumeros.push(operador) 
    }
}
const mostrarResultado = () => resultado.value.length === 0 ? alert("[ERRO] Adicione um número") : 
resultado.value = eval(resultado.value)

const limparTela = () => resultado.value = ""

function limparUltimoNumero() {
    if (resultado.value.length == 0) {
        alert("[ERRO] Adicione um número")
    } else {
        const ultimoNumero = arrayNumeros.pop()
        resultado.value = resultado.value.replace(ultimoNumero, "")
    }
}
