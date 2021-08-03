var resultado = document.getElementById("resultado")

function contandoValores() {
    var valorFinal = Number(document.getElementById("input-positivos").value)
    resultado.innerHTML = `<h3> Contando de 0 ate ${valorFinal}`

    for(var i=0;i<=valorFinal;i++) {
        resultado.innerHTML += ` ${i} ->`
    } 
}
