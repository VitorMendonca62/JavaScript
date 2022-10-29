const resultado = document.getElementById("resultado");
const operadores = ["+", "-", "/", "*"];
const algarismos = [...document.getElementsByClassName("algarismos")];

function verificaSeForZero() {
  resultado.value.length === 0 ? true : false;
}

function verificaAlgarismo(algarismoEscolhido) {
  const algarismo = algarismoEscolhido || event.target.innerText;
  operadores.forEach((operador) =>
    operador === algarismo ? escreveOperadores(algarismo) : false
  );
  if (!isNaN(algarismo) || !isNaN(algarismoEscolhido)) {
    escreveNumero(algarismo);
  }
}

function escreveNumero(numeroEscolhido) {
  resultado.value == "0"
    ? (resultado.value = numeroEscolhido)
    : (resultado.value += numeroEscolhido);
}

function escreveOperadores(operador) {
  const ultimoAlgarismo = resultado.value.split("").pop();
  !!isNaN(ultimoAlgarismo) ? false : (resultado.value += operador);
}

function escreveDecimal() {
  resultado.value.length === 0
    ? (resultado.value += "0.")
    : (resultado.value += ".");
}

const mostrarResultado = () => (resultado.value = eval(resultado.value));

const limparTela = () => (resultado.value = "");

function limparUltimoNumero() {
  const ultimoNumero = arrayNumeros.pop();
  resultado.value = resultado.value.replace(ultimoNumero, "");
}

function teclaPressioanda(event) {
  const tecla = event.key;

  if (!isNaN(tecla)) {
    verificaAlgarismo(tecla);
  }
  if (tecla == "*" || tecla == "/" || tecla == "+" || tecla == "-") {
    verificaSeForZero() ? false : verificaAlgarismo(tecla);
  }
  if (tecla === ".") {
    escreveDecimal();
  }
  if (tecla === "Enter") {
    verificaSeForZero() ? false : mostrarResultado(tecla);
  }
  if (tecla === "Backspace") {
    verificaSeForZero() ? false : limparUltimoNumero(tecla);
  }
}
document.addEventListener("keydown", teclaPressioanda);
algarismos.forEach((botao) =>
  botao.addEventListener("click", () => verificaAlgarismo())
);
