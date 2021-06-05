function multiplicar() {
    var txtnumber = document.getElementById('número')
    var tabuada = document.getElementById('select-tabuada')

    if ( txtnumber.value.length === 0 ) {
        alert("[ERRO] Preencha os dados corretamente!")
        window.location = 'index.html'
    }
    var number = Number(txtnumber.value)
    tabuada.innerHTML = ''
    for (var c = 1; c <= 10; c++) {
        var res = document.createElement('option')
        res.text = `${number} x ${c} = ${number*c}`
        tabuada.appendChild(res)
        console.log(`${number} x ${c} = ${number*c}`)
    }
    

}