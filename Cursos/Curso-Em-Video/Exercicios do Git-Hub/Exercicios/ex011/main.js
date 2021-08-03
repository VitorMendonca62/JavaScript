function calcularMedia() {
var nomeAluno = prompt("Qual é o nome do aluno? ")
var nota01 = Number(prompt(`Qual foi a primeira nota de ${nomeAluno}`))
var nota02 = Number(prompt(`Qual foi a segunda nota de ${nomeAluno}`))
var mediaAluno = (nota01 + nota02) / 2
resultado.innerHTML = `<h1> Calculando a média final de ${nomeAluno}.`
resultado.innerHTML += `<p> As notas obtidas foram ${nota01} e ${nota02}.`
resultado.innerHTML += `<p> A média final será ${mediaAluno}.`

if (mediaAluno >= 6) {
    resultado.innerHTML += " <p>  A mensagem que temos é: Meus parabéns!"
} else {
    resultado.innerHTML += " <p> A mensagem que temos é: Estude um pouco mais!"
}
}