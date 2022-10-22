const resultado = document.getElementById("resultado");
const operadores = ["+", "-", "/", "*"];
const arrayNumeros = new Array();

function escreveNumero(numeroEscolhido) {
  resultado.value == 0
    ? (resultado.value = numeroEscolhido)
    : (resultado.value += numeroEscolhido);
  arrayNumeros.push(numeroEscolhido);
}
const escreveDecimal = () =>
  resultado.value.length === 0
    ? (resultado.value += "0.")
    : (resultado.value += ".");

function escreveOperadores(operador) {
  if (resultado.value.length === 0) {
    alert("[ERRO] Adicione um número");
  } else {
    const valorFinal = resultado.value[resultado.value.length - 1];
    const isOperador = operadores.filter((op) => op === valorFinal);
    if (isOperador.length) {
      alert("[ERRO] Adicione um número");
    } else {
      resultado.value += operador;
      arrayNumeros.push(operador);
    }
  }
}
const mostrarResultado = () =>
  resultado.value.length === 0
    ? alert("[ERRO] Adicione um número")
    : (resultado.value = eval(resultado.value));

const limparTela = () => (resultado.value = "");

function limparUltimoNumero() {
  if (resultado.value.length == 0) {
    alert("[ERRO] Adicione um número");
  } else {
    const ultimoNumero = arrayNumeros.pop();
    resultado.value = resultado.value.replace(ultimoNumero, "");
  }
}

function teclaPressioanda(event) {
  const tecla = event.key;

  if (!isNaN(tecla)) {
    escreveNumero(tecla);
  }
  if (tecla == "*" || tecla == "/" || tecla == "+" || tecla == "-") {
    escreveOperadores(tecla);
  }
  if (tecla === ".") {
    escreveDecimal();
  }
  if (tecla === "Enter") {
    mostrarResultado();
  }
  if (tecla === "Backspace") {
    limparUltimoNumero();
  }
}
document.addEventListener("keydown", teclaPressioanda);
