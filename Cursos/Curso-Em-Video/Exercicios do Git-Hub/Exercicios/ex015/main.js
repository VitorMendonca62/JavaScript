var resultado = document.getElementById("resultado")


function iniciarAnalise() {
    var d = new Date()

    var diaUsuario = d.getDate()
    var mesUsuario = d.getMonth()
    var anoUsuario = d.getFullYear()
    var diaSemanaUsuario = d.getDay()
    var horaUsuario = d.getHours()
    var minutosUsuario = d.getMinutes()
    var segundosUsuario = d.getSeconds()

    var meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    var semana = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')


    resultado.innerHTML = `<p>Dia: ${diaUsuario}`
    resultado.innerHTML += `<p>Mês: ${meses[mesUsuario]}`
    resultado.innerHTML += `<p>Ano: ${anoUsuario}`
    resultado.innerHTML += `<p>Dia da semana: ${semana[diaSemanaUsuario]}`
    resultado.innerHTML += `<p>Hora: ${horaUsuario}`
    resultado.innerHTML += `<p>Minutos: ${minutosUsuario}`
    resultado.innerHTML += `<p>Segundos: ${segundosUsuario}`
    setTimeout(iniciarAnalise, 1000)
}