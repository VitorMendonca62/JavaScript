function verificar() {
    var d = new Date
    var ano = d.getFullYear()

    var txtAnoNasc = document.getElementById('input-nascimento')

    if (txtAnoNasc.value.length == 0 || Number(txtAnoNasc.value) > ano) {
        alert("[ERRO] Preencha os dados do nascimento corretamente e tente novamente")
        window.location = 'index.html'
    }
    var AnoNasc = Number(txtAnoNasc.value)
    var idade = ano - AnoNasc
    var res = document.getElementById('resultado')

    var sexo = document.getElementsByName('sexo')
    var img = document.createElement('img')
    img.setAttribute('src', 'foto')


    if (sexo[0].checked) {
        var genero = ' homem'
        if (idade == 0 || idade < 13) { // criança
            img.setAttribute('src', 'https://i.imgur.com/WQqoYlv.png')
        }
        else if (idade >= 13 && idade < 18) { // Jovem
            img.setAttribute('src', 'https://i.imgur.com/Gq4aS5q.png%27')
        } else if (idade >= 18 && idade < 50) { // adulto
            img.setAttribute('src', 'https://i.imgur.com/Yp0zBgW.png%27')
        }
        else if (idade >= 50) { // Idoso
            img.setAttribute('src', 'https://i.imgur.com/I2RqUhX.png%27')
            img.style.width = '1'
        }
    }

    else if (sexo[1].checked) {
        var genero = 'a mulher'
        if (idade == 0 || idade < 13) { // criança
            img.setAttribute('src', 'https://i.imgur.com/fUhAn11.png%27')
        }
        else if (idade >= 13 && idade < 18) { // Jovem
            img.setAttribute('src', 'https://i.imgur.com/Xrs3xH9.png%27')
        } else if (idade >= 18 && idade < 50) { // adulto
            img.setAttribute('src', 'https://i.imgur.com/YbnwZF6.png%27')
        }
        else if (idade >= 50) { // Idoso
            img.setAttribute('src', 'https://i.imgur.com/rqoQw7G.png%27')
        }
    } else {
        alert('[ERRO] Preencha os dados do sexo corretamente e tente novamente')
    }
    res.innerHTML = `Detectamos um${genero}, com idade de ${idade} anos`
    res.appendChild(img)
}
