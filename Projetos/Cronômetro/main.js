var txtMilisegundos = document.getElementById("milisegundos")
var txtSegundos = document.getElementById("segundos")
var txtMinutos = document.getElementById("minutos")



var minutos = 0
var segundos = 0
var milisegundos = 0
var interval;




function iniciarCronometro() {
    if (milisegundos >= 100) {
        milisegundos=0
        segundos++
    }
    if( segundos == 60) {
        segundos=0
        minutos++
    }
    txtMilisegundos.innerHTML = (milisegundos < 10) ? "0" + milisegundos++ : milisegundos++
    txtSegundos.innerHTML = (segundos < 10) ? "0" + segundos : segundos
    txtMinutos.innerHTML = ( minutos < 10) ? "0" + minutos :  minutos
}
function pararCronometro() {
    clearInterval(interval)
}
function ligarCronometro() {
    clearInterval(interval)
    interval = setInterval(iniciarCronometro, 10)
}
function resetarCronometro() {
    segundos = 0; milisegundos=0; minutos=0
    txtMilisegundos.innerHTML = "0" + milisegundos
    txtSegundos.innerHTML = "0" + segundos
    txtMinutos.innerHTML = "0" + minutos
    clearInterval(interval)
}
