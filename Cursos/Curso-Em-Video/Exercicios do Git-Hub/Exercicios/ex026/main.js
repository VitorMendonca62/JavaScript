var resultado = document.getElementById("resultado")

function contandoValores() {
    var valorInicial = Number(document.getElementById("input-valor-inicial").value)
    var valorFinal = Number(document.getElementById("input-valor-final").value)
    resultado.innerHTML = `<h3> Contando de ${valorInicial} ate ${valorFinal}`

    if (valorInicial < valorFinal) {
        for (var i = valorInicial; i <= valorFinal; i++) {
            resultado.innerHTML += ` ${i} ->`
        }
    }
    if (valorFinal < valorInicial) {
        for (var i = valorInicial; i >= valorFinal; i--) {
            resultado.innerHTML += ` ${i} ->`
        }
    }
}
