var selec_number = document.getElementById('select-number')
var fim = document.getElementById('fim')
var array = []
var ja_foi = false

function adicionar() {
    var txtnumber = document.getElementById('input-number')
    var number = Number(txtnumber.value)
    var pos = array.indexOf(number)

    if (txtnumber.value.length == 0 || number >= 100 || number < 1) {
        alert("[ERRO] Preencha os dados corretamente")
    } else {
        if (pos > -1) {
            alert("[ERRO] Valor já encontrado na lista")
        }
        else {
            array.push(number)
            var res = document.createElement('option')
            res.text = `O valor ${number} foi adicionado`
            selec_number.appendChild(res)
        }
    }
    txtnumber.value = ''
    txtnumber.focus()
    fim.innerHTML = ""
    ja_foi = true
    return array
}

function analisar() {
    if (ja_foi === false) {
        alert("Adicione os valores antes de finalizar")
    } else {
        var tamanho = array.length
        var txttamanho = document.createElement('p')
        txttamanho.innerHTML = `Ao todo, temos ${tamanho} números cadastrados!`
        fim.appendChild(txttamanho)

        let maior = array[0]
        let menor = array[0]
        var soma = 0
        var media = 0
        for (let pos in array) {
            soma += array[pos]
            if (array[pos] > maior) {
                maior = array[pos]
            } else (array[pos] < menor); {
                menor = array[pos]
            }
        }
        var txtprimeiro = document.createElement('p')
        txtprimeiro.innerHTML = `O menor número informado foi ${menor}!`
        fim.appendChild(txtprimeiro)

        var txtultimo = document.createElement('p')
        txtultimo.innerHTML = `O maior número informado foi ${maior}!`
        fim.appendChild(txtultimo)

        var txtsoma = document.createElement('p')
        txtsoma.innerHTML = `A soma entre os valores foi ${soma}!`
        fim.appendChild(txtsoma)

        var txtmedia = document.createElement('p')
        txtmedia.innerHTML = `A média entre os valores foi ${soma / tamanho}!`
        fim.appendChild(txtmedia)
    }
}
