const valor = prompt("Digite um número");
const tirarZeroNaPosicao = (valor) => {
  return valor[0] == 0 ? valor.slice(1, valor.length) : valor;
};
const novoValor = tirarZeroNaPosicao(valor);
let ArrayValor;
novoValor <= 9
  ? console.log(calcularUmDigito(novoValor))
  : novoValor <= 19
  ? console.log(calcularDoisDigitosMenoresQueVinte(novoValor))
  : novoValor <= 99
  ? console.log(calcularDoisDigitos(novoValor))
  : novoValor <= 999
  ? console.log(calcularTresDigitos(novoValor))
  : novoValor <= 9999
  ? console.log(calcularQuatroDigitos(novoValor))
  : false;

function calcularUmDigito(valor) {
  const umDigito = [
    "Zero",
    "Um",
    "Dois",
    "Três",
    "Quatro",
    "Cinco",
    "Seis",
    "Sete",
    "Oito",
    "Nove",
  ];
  return umDigito[valor];
}

function calcularDoisDigitosMenoresQueVinte(valor) {
  typeof valor === "string" ? (ArrayValor = valor.split("")) : false;

  const doisDIgitos = [
    "Dez",
    "Onze",
    "Doze",
    "Treze",
    "Quatorze",
    "Quinze",
    "Dezesseis",
    "Dezessete",
    "Dezoito",
    "Dezenove",
  ];
  return doisDIgitos[ArrayValor.pop()];
}

function calcularDoisDigitos(valor) {
  typeof valor === "string" ? (ArrayValor = valor.split("")) : false;

  const Dezenas = [
    "",
    "",
    "Vinte",
    "Trinta",
    "Quarenta",
    "Cinquenta",
    "Sessenta",
    "Setenta",
    "Oitenta",
    "Noventa",
  ];
  if (valor % 10 === 0) {
    return Dezenas[ArrayValor.shift()];
  } else {
    return (
      Dezenas[ArrayValor.shift()] + " e " + calcularUmDigito(ArrayValor[0])
    );
  }
}

function calcularTresDigitos(valor) {
  typeof valor === "string" ? (ArrayValor = valor.split("")) : false;

  const Centenas = [
    "Cem",
    "Cento",
    "Duzentos",
    "Trezentos",
    "Quatrocentos",
    "Quinhentos",
    "Seiscentos",
    "Setecentos",
    "Oitocentos",
    "Novecentos",
  ];

  if (valor % 100 === 0) {
    return valor / 100 === 1 ? Centenas[0] : Centenas[ArrayValor.shift()];
  } else {
    const nomeCentena = Centenas[ArrayValor.shift()];
    ArrayValor = tirarZeroNaPosicao(ArrayValor);

    let doisDigitos =
      ArrayValor.length < 2
        ? ArrayValor[0]
        : ArrayValor[0].concat(ArrayValor[1]);

    if (doisDigitos < 9) {
      const nomeDoisDigitos = calcularUmDigito(doisDigitos);
      return `${nomeCentena} e ${nomeDoisDigitos}`;
    }
    if (doisDigitos > 9 && doisDigitos < 20) {
      const nomeDoisDigitos = calcularDoisDigitosMenoresQueVinte(doisDigitos);
      return `${nomeCentena} e ${nomeDoisDigitos}`;
    }
    if (doisDigitos > 19) {
      const nomeDoisDigitos = calcularDoisDigitos(doisDigitos);
      return `${nomeCentena} e ${nomeDoisDigitos}`;
    }
  }
}
