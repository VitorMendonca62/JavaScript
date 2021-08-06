var asQuestoes = [{
    questao: "Quais stacks o Javascipt pode atuar?",
    respostas: {
        a: "Front-end",
        b: "Back-end",
        c: "Deselvovimento mobile",
        d: "Todas as stacks"
    },
    alternativaCorreta: "Todas as stacks"
},
{
    questao: "Quem cricou o JavaScript",
    respostas: {
        a: "Bill Gates",
        b: "Brendan Eich",
        c: "Gustavo Guanabara",
        d: "Steve Jobs"
    },
    alternativaCorreta: "Brendan Eich"
},
{
    questao: "Quando o JavaScript foi criado?",
    respostas: {
        a: "1994",
        b: "1990",
        c: "1995",
        d: "1993"
    },
    alternativaCorreta: "1995"
}
]
var resultuado = document.getElementById("questões")
var arrayNumerosAleatorios = new Array()
var jaFoi = false

function escreverQuestoes() {
    var questao1 = asQuestoes[arrayNumerosAleatorios[0]]
    var questao2 = asQuestoes[arrayNumerosAleatorios[1]]
    var questao3 = asQuestoes[arrayNumerosAleatorios[2]]

    if (arrayNumerosAleatorios.length < 3) {
        numeroAleatorio()
    }
    if (arrayNumerosAleatorios.length == 3 && jaFoi == false) {
        resultuado.innerHTML += `<h2 id="quest01"> ${questao1.questao} </h2>
    <p><input type="radio" name="questao01" value="${questao1.respostas.a}"> ${questao1.respostas.a}</p>
    <p><input type="radio" name="questao01" value="${questao1.respostas.b}"> ${questao1.respostas.b}</p>
    <p><input type="radio" name="questao01" value="${questao1.respostas.c}"> ${questao1.respostas.c}</p>
    <p><input type="radio" name="questao01" value="${questao1.respostas.d}"> ${questao1.respostas.d}</p>`

        resultuado.innerHTML += `<h2 id="quest02"> ${questao2.questao} </h2>
    <p><input type="radio" name="questao02" value="${questao2.respostas.a}"> ${questao2.respostas.a}</p>
    <p><input type="radio" name="questao02" value="${questao2.respostas.b}"> ${questao2.respostas.b}</p>
    <p><input type="radio" name="questao02" value="${questao2.respostas.c}"> ${questao2.respostas.c}</p>
    <p><input type="radio" name="questao02" value="${questao2.respostas.d}"> ${questao2.respostas.d}</p>`

        resultuado.innerHTML += `<h2 id="quest03"> ${questao3.questao} </h2>
    <p><input type="radio" name="questao03" value="${questao3.respostas.a}"> ${questao3.respostas.a}</p>
    <p><input type="radio" name="questao03" value="${questao3.respostas.b}"> ${questao3.respostas.b}</p>
    <p><input type="radio" name="questao03" value="${questao3.respostas.c}"> ${questao3.respostas.c}</p>
    <p><input type="radio" name="questao03" value="${questao3.respostas.d}"> ${questao3.respostas.d}</p>`
        resultuado.innerHTML += `<button onclick="verificarQuestoes()">Verificar Questões</button>`
        jaFoi = true
    }
}
function erroNumeroAleatorio() {
    numeroAleatorio()
}
function numeroAleatorio() {
    if (arrayNumerosAleatorios.length < 3) {
        let min = 0
        let max = 3
        let dif = max - min
        let aleatorio = Math.random()
        var numeroAleatorio = min + Math.trunc(dif * aleatorio)
        if (arrayNumerosAleatorios.indexOf(numeroAleatorio) != -1) {
            erroNumeroAleatorio()
        } else {
            arrayNumerosAleatorios.push(numeroAleatorio)
            escreverQuestoes()
        }
    }
}
var radiosQuestoao01 = document.getElementsByName("questao01")
var radiosQuestoao02 = document.getElementsByName("questao02")
var radiosQuestoao03 = document.getElementsByName("questao03")

var checked01 = false; var checked02 = false; var checked03 = false

var arrayNumerosDasTentativas = new Array()

function verSePreencheu() {
    for (var a = 0; a <= 4; a++) {
        if (radiosQuestoao01[a].checked) {
            checked01 = true
            arrayNumerosDasTentativas.push(a)
            break
        } else { false }
    }
    for (var b = 0; b <= 4; b++) {
        if (radiosQuestoao02[b].checked) {
            checked02 = true
            arrayNumerosDasTentativas.push(b)
            break
        } else { false }
    }
    for (var c = 0; c <= 4; c++) {
        if (radiosQuestoao03[c].checked) {
            checked03 = true
            arrayNumerosDasTentativas.push(c)
            break
        } else { false }
    }
}
var acertou = 0

function verificarQuestoes() {
    verSePreencheu()

    var quest01 = document.getElementById("quest01")
    var quest02 = document.getElementById("quest02")
    var quest03 = document.getElementById("quest03")

    if (checked01 == true && checked02 == true && checked03 == true) {
        if (radiosQuestoao01[arrayNumerosDasTentativas[0]].value == asQuestoes[arrayNumerosAleatorios[0]].alternativaCorreta) {
            acertou++
            quest01.style.color = "green"
        } else { quest01.style.color = "red" }
        if (radiosQuestoao02[arrayNumerosDasTentativas[1]].value == asQuestoes[arrayNumerosAleatorios[1]].alternativaCorreta) {
            acertou++
            quest02.style.color = "green"
        } else { quest02.style.color = "red" }
        if (radiosQuestoao03[arrayNumerosDasTentativas[2]].value == asQuestoes[arrayNumerosAleatorios[2]].alternativaCorreta) {
            acertou++
            quest03.style.color = "green"
        } else { quest03.style.color = "red" }
    } else {
        console.log("Preencha todos os dados")
    }
    resultuado.innerHTML += `<h3> Você obteve ${acertou} acertos! Parábens!`
}


