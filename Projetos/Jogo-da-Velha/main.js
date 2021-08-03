var casa01 = document.getElementById("casa-1x1")
var casa02 = document.getElementById("casa-1x2")
var casa03 = document.getElementById("casa-1x3")
var casa04 = document.getElementById("casa-2x1")
var casa05 = document.getElementById("casa-2x2")
var casa06 = document.getElementById("casa-2x3")
var casa07 = document.getElementById("casa-3x1")
var casa08 = document.getElementById("casa-3x2")
var casa09 = document.getElementById("casa-3x3")
var jogador = 1;

var arrayCasas = new Array(casa01, casa02, casa03, casa04, casa05, casa06, casa07, casa08, casa09)
var casasJaSelecionadas = new Array();

function colocarSimbolo(casa) {
    var casaSelecionada = arrayCasas[casa]
    if (casasJaSelecionadas.indexOf(casaSelecionada) == -1) {
        casasJaSelecionadas.push(casaSelecionada)

        if (jogador === 1) {
            casaSelecionada.innerHTML = "X"
            arrayCasas[casa].value = "X"
            jogador++
            conferirVitoria("X")

        } else if (jogador == 2) {
            casaSelecionada.innerHTML = "O"
            arrayCasas[casa].value = "O"
            jogador--
            conferirVitoria("O")
        }
    }
    else {
        alert("CASA JÁ SELECIONADA")
    }

}

function conferirVitoria(simbolo) {
    if (arrayCasas[6].value == simbolo && arrayCasas[4].value == simbolo && arrayCasas[2].value == simbolo) {
        alert(`${simbolo} venceu!`) // Vitoria Diagonal
        resetJogo()
    }
    if (arrayCasas[0].value == simbolo && arrayCasas[4].value == simbolo && arrayCasas[8].value == simbolo) {
        alert(`${simbolo} venceu!`) // Vitoria Diagonal
        resetJogo()
    }
    for (let i = 0; i <= 2; i++) { // Vitoria linhas
        if (arrayCasas[i].value == simbolo && arrayCasas[i + 3].value == simbolo && arrayCasas[i + 6].value == simbolo) {
            alert(`${simbolo} venceu!`)
            resetJogo()
        }
    }
    for (let i = 0; i <= 6; i+=3) { // Vitoria colunas
        if (arrayCasas[i].value == simbolo && arrayCasas[i + 1].value == simbolo && arrayCasas[i + 2].value == simbolo) {
            alert(`${simbolo} venceu!`)
            resetJogo()
        }
    }
}

function resetJogo() {
    for (var i = 0; i <= 8; i++) {
        arrayCasas[i].value = " "
        arrayCasas[i].innerHTML = " "
    }
    tamanhoCasasJaSelecionadas = casasJaSelecionadas.length
    for (var i=1;i<=tamanhoCasasJaSelecionadas;i++){
        casasJaSelecionadas.pop()

    }
}
