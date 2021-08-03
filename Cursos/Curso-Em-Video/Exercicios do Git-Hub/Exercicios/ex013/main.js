var resultado = document.getElementById("resultado")

function maiorValor() {
    var numero01 = prompt("Digite um número: ")
    var numero02 = prompt("Digite outro número: ")

    if ( numero01 > numero02) {
        resultado.innerHTML = `Analisando os valores ${numero01} e ${numero02}, o maior valor é ${numero01}`
    } else if (numero01 < numero02) {
        resultado.innerHTML = `Analisando os valores ${numero01} e ${numero02}, o maior valor é ${numero02}`
    } else {
        resultado.innerHTML = `Analisando os valores ${numero01} e ${numero02}, os valores são IGUAIS`
    }
}