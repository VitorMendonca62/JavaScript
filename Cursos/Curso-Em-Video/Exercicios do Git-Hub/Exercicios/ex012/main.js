var resultado = document.getElementById("resultado")

function iniciarCalculo() {
    var numero01 = prompt("Digite um número: ")

    if (numero01 % 2 == 0) {
        resultado.innerHTML = `O número ${numero01} que foi digitado é PAR!`
    } else {
        resultado.innerHTML = `O número ${numero01} que foi digitado é IMPAR!`
    }
}