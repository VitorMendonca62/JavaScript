var divn1 = document.getElementById('div-n1')
var divn2 = document.getElementById('div-n2')
var divop = document.getElementById('operações')

var txtn1 = document.getElementById('input-n1')
var txtn2 = document.getElementById('input-n2')

var res = document.getElementById('resultado')

function botãon1() {
    if (txtn1.value.length == 0) {
        alert('[ERRO] Preencha os dados do número um corretamente e tente novamente')
        window.location('index.html')
    }
    
    divn1.setAttribute('hidden', 'id')
    divn2.removeAttribute('hidden')
}

function botãon2() {
    if (txtn2.value.length == 0) {
        alert('[ERRO] Preencha os dados do número um corretamente e tente novamente')
        window.location('index.html')
    }
    
    divn2.setAttribute('hidden', 'id')
    divop.removeAttribute('hidden')
}

function soma() {
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    
    var resultado = n1 + n2
    console.log(`O resultado da soma ${n1} + ${n2} é ${resultado}`)
    res.removeAttribute('hidden')
    divop.setAttribute('hidden', 'id')
}
function subtrair() {
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)

    var resultado = n1 - n2
    console.log(`O resultado da subtração ${n1} - ${n2} é ${resultado}`)
    res.removeAttribute('hidden')
    divop.setAttribute('hidden', 'id')
}
function dividir() {
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)

    var resultado = n1 / n2
    console.log(`O resultado da divisão ${n1} / ${n2} é ${resultado}`)
    res.removeAttribute('hidden')
    divop.setAttribute('hidden', 'id')
}
function multiplicar() {
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)

    var resultado = n1 * n2
    console.log(`O resultado da multiplicação ${n1} * ${n2} é ${resultado}`)
    res.removeAttribute('hidden')
    divop.setAttribute('hidden', 'id')

}