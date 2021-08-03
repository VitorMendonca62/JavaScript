var resultado = document.getElementById("resultado")

function iniciarCalculo() {
    var nascimentoUsuario = Number(prompt("Em que ano você nasceu?"))
    var d = new Date
    var anoHoje = d.getFullYear()
    var idadeUsuario = anoHoje - nascimentoUsuario

    resultado.innerHTML = `Quem nasceu em ${nascimentoUsuario} vai completar ${idadeUsuario} anos em ${anoHoje}.`

    }
