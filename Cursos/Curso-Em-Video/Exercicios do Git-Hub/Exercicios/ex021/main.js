var resultado = document.getElementById("resultado")

function contandoAte10() {
    resultado.innerHTML = "<h3> Contando 1 ate 10"
    for( var i=1;i<=10;i++) {
        resultado.innerHTML += ` ${i} ->`
    } 
}