const corpo = document.getElementsByTagName("body")[0];
const valores = [];
const txtn1 = document.getElementById("input-n1");

function botãon1() {
  if (txtn1.value.length == 0) {
    alert(
      "[ERRO] Preencha os dados do número um corretamente e tente novamente"
    );
    window.location("index.html");
  }

  corpo.innerHTML = `
    <div id="div-n2" class="div-numeros">
    <p id="p-digite-n2" class="p-numeros">Digite o segundo número</p>
    <input
      class="input-numeros"
      type="number"
      name="n2"
      id="input-n2"
      placeholder="Número Dois"
    />
    <button class="botao-numeros" id="botao-n2" onclick="botãon2()">
      Adicionar
    </button>
  </div>
    `;
  const n1 = Number(txtn1.value);
  valores.push(n1);
}

function botãon2() {
  const txtn2 = document.getElementById("input-n2");

  if (txtn2.value.length == 0) {
    alert(
      "[ERRO] Preencha os dados do número um corretamente e tente novamente"
    );
    window.location("index.html");
  }
  corpo.innerHTML = `
  <div id="operações">
        <p class="p-numeros">Digite a operação que deseja:</p></p>
        <button class="botao" onclick="calcularValores('+')">Somar</button>
        <button class="botao" onclick="calcularValores('-')">Subtrair</button>
        <button class="botao" onclick="calcularValores('/')">Dividir</button>
        <button class="botao" onclick="calcularValores('*')">Multiplicar</button>
    </div>
    <div class="p-numeros" id="resultado" hidden>Olhe no Console</div>
  `;

  const n2 = Number(txtn2.value);
  valores.push(n2);
}

function calcularValores(operacao) {
    const [n1,n2] = [valores[0],valores[1]]

    const resultado = eval(n1+operacao+n2)

  corpo.innerHTML = `RESULTADO`;
  alert(`O resultado da operação ${n1} ${operacao} ${n2} = ${resultado}`);
}
