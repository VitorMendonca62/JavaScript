let resultado = document.getElementById('resultado')

function clicouBotao01() {
    resultado.innerHTML += '<p>Clicou no primeiro botão.'
}
function clicouBotao02() {
    resultado.innerHTML += '<p>Clicou no segundo botão.'
}
function clicouBotao03() {
    resultado.innerHTML += '<p>Clicou no terceiro botão.'
}
function clicouBotao04() {
    resultado.innerHTML += '<p>Clicou no quarto botão.'
}
function limparTela() {
    resultado.innerHTML = "Aqui vou registrar suas ações com os botões acima."
}