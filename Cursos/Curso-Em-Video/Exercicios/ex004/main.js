function contar() {

    var txtinicio = document.getElementById('input-inicio')
    var txtfim = document.getElementById('input-fim')
    var txtrazão = document.getElementById('input-razao')
    var res = document.getElementById('resultado')

    if (txtinicio.value.length == 0 || txtfim.value.length == 0 || txtrazão.value.length == 0)  {
        alert("[ERRO] Preencha os dados corretamente!")
        window.location = 'index.html'
    }
    res.innerHTML = 'Contando...'
    var inicio = Number(txtinicio.value)
    var fim = Number(txtfim.value)
    var razão = Number(txtrazão.value)

    if (razão == 0) {
        alert("[ERRO] Razão inválida, considerando 1")
        razão=1
    }

    if (inicio < fim) {
        for (var i = inicio; i <= fim; i += razão) {
            res.innerHTML += `${i} -> `
        }
 }  else {
        for (var i = inicio; i >= fim; i -= razão) {
        res.innerHTML += `${i} -> `
    }
    }
    }