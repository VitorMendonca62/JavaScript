var resultado = document.getElementById("resultado")

function contandoAte10() {
    resultado.innerHTML = "<h3> Contando os pares de 1 ate 10"
    for( var i=1;i<=10;i++) {
        if (i % 2 == 0) {
            resultado.innerHTML += ` <mark>${i}</mark> ->`
        }
        
    } 
}