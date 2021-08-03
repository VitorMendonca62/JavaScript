var resultado = document.getElementById("resultado")
var botão = document.getElementById("botão")
var numeroAleatorio = iniciarGerador()
console.log(numeroAleatorio)

function iniciarGerador() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    return min + Math.trunc(dif * aleatorio)

}

function tentarPalpite() {
    var valorPalpite = prompt("Qual é o seu palpite?")

    if (valorPalpite < numeroAleatorio) {
        resultado.innerHTML += ` <p> Você falou ${valorPalpite}. Meu número é MAIOR!`
    } else if ( valorPalpite > numeroAleatorio) {
        resultado.innerHTML += `<p> Você falou ${valorPalpite}. Meu número é MENOR!`
    } else {
        resultado.innerHTML = `<h3>PARABÉNS! Você acertou! Eu tinha sorteado o valor ${numeroAleatorio}`
        botão.setAttribute("style" ,'display: none;')
    }
}
