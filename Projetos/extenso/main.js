const valor = prompt("Digite um número");
let ArrayValor;
valor <= 9
  ? console.log(calcularUmDigito(valor))
  : valor <= 19
  ? console.log(calcularDoisDigitosMenoresQueVinte(valor))
  : valor <= 99
  ? console.log(calcularDoisDigitos(valor))
  : valor <= 999
  ? console.log(calcularTresDigitos(valor))
  : valor <= 9999
  ? console.log(calcularQuatroDigitos(valor))
  : false

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
  let dezenasInformadas =  ArrayValor[1].concat(ArrayValor[2])

  if (valor % 100 === 0) {
    return valor / 100 == 1 ? Centenas[0] : Centenas[ArrayValor.shift()];
  } else if (
    dezenasInformadas < 19 && dezenasInformadas > 9
  ) {
    return (
      Centenas[ArrayValor.shift()] +
      " e " +
      calcularDoisDigitosMenoresQueVinte(ArrayValor)
    );
  } else {
    return (
      Centenas[ArrayValor.shift()] + " e " + calcularDoisDigitos(ArrayValor)
    );
  }
}
