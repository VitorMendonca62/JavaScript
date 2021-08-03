var resultado = document.getElementById("resultado")

function contandoAte1() {
    resultado.innerHTML = "<h3> Contando 1 ate 10"
    for( var i=10;i>=1;i--) {
        resultado.innerHTML += ` ${i} ->`
        
    } 
}