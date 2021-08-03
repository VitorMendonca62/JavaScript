var resultado = document.getElementById("resultado")

function descobrirEstaçãoAno() {
    var mesInformado = prompt("Digite o mês em extenso (ex: Setembro)")
    console.log(mesInformado.toUpperCase())
    var mesInformado = mesInformado.toUpperCase()

    if (mesInformado == 'JANEIRO' || mesInformado == 'FEVEREIRO' || mesInformado == 'MARÇO') {
        resultado.innerHTML = `No mês de ${mesInformado.toLowerCase()}, estamos na estação VERÃO `
    } else if ((mesInformado == 'OUTUBRO' || mesInformado == 'NOVEMBRO' || mesInformado == 'DEZEMBRO')) {
        resultado.innerHTML = `No mês de ${mesInformado.toLowerCase()}, estamos na estação PRIMAVERA `
    } else if (mesInformado == 'JULHO' || mesInformado == 'AGOSTO' || mesInformado == 'SETEMBRO') {
        resultado.innerHTML = `No mês de ${mesInformado.toLowerCase()}, estamos na estação INVERNO `
    } else if (mesInformado == 'MAIO' || mesInformado == 'JUNHO' || mesInformado == 'ABRIL') {
        resultado.innerHTML = `No mês de ${mesInformado.toLowerCase(    )}, estamos na estação OUTONO `
    } else {
        resultado.innerHTML = "Acho que você escreveu errado. :<("
    }
}