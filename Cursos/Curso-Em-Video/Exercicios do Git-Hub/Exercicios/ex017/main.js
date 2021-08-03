function iniciarGerador() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    let num = min + Math.trunc(dif * aleatorio)
    
    let res = document.getElementById("resultado")
    res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`
}

function limparTela() {
    resultado.innerHTML = `<p>Aqui vai aparecer o resultado...`
}