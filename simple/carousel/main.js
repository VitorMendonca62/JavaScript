const imgs = [...document.querySelectorAll("img")];
const divRadios = document.getElementsByClassName("radios")[0];

let index = 0;
const indexUltimaFoto = imgs.length - 1;

function addRadios() {
  imgs.forEach(
    (img, index) =>
      (divRadios.innerHTML += `
      <input 
        type='radio' 
        name="indexFotos" id="${index}" 
        onclick="deslocarImagem(${index})">`)
  );
}

document.onload = addRadios();

const time = 5000;

function limparIntervalo(indice) {
  clearInterval(interval);
  setTimeout(() => {
    interval = setInterval(deslocarImagem, time);
  }, 1);
}

function retrocederImagem() {
  index -= 2;
  deslocarImagem();
}
function passarImagem() {
  deslocarImagem();
}

function deslocarImagem(indice) {
  if (!!event) {
    limparIntervalo();
  }

  const indexDaUltimaFoto = index;
  index++;
  indice = indice === 0 ? 0 + "" : indice;
  index = !!indice ? indice : index;
  index = index > indexUltimaFoto ? 0 : index;
  index = index < 0 ? indexUltimaFoto : index;

  imgs[index - 1 < 0 ? indexUltimaFoto : index].style.transform =
    "translateX(0)";

  imgs.forEach(
    (img) =>
      (img.style.transform = `translateX(${-(img.width / 16) * index}rem)`)
  );
  imgs.forEach((img) => console.log(img.width));

  const radios = [...divRadios.children];
  radios.forEach((radio) => radio.removeAttribute("checked"));
  radios[index].setAttribute("checked", "true");
}

let interval = setInterval(deslocarImagem, time);
