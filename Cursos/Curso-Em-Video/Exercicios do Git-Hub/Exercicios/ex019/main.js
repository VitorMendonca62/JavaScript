var resultado = document.getElementById("resultado")

function iniciarCalculo() {
    var numero01 = Number(prompt("Primeiro valor:"))
    var numero02 = Number(prompt("Segundo valor:"))

    var operador = Number(prompt(`Valores informados: ${numero01} e ${numero02}. /nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))
    resultado.innerHTML = "<h1> Calculando"

    switch (operador) {
        case 1: 
            resultado.innerHTML += `<p> ${numero01} + ${numero02} = ${numero01 + numero02}`
            break
        case 2: 
            resultado.innerHTML += `<p> ${numero01} - ${numero02} = ${numero01 - numero02}`
            break
        case 3: 
            resultado.innerHTML += `<p> ${numero01} * ${numero02} = ${numero01 * numero02}`
            break
        case 4: 
            resultado.innerHTML += `<p> ${numero01} / ${numero02} = ${numero01 / numero02}`
            break    
        default: 
            resultado.innerHTML += `<p> OPÇÃO INVÁLIDA! Você digitou ${numero01} e ${numero02}, mas não sei o que fazer com eles.`

    }

}