const users = [
  {
    user: "vitor",
    contato: "Vitinho Minaj",
    img: "imgs/icon_vitor.jpg",
  },
  {
    user: "luan",
    contato: "Luan Meu Pato no Xadrez",
    img: "imgs/icon_luan.jpg",
  },
];

const elemSlug = document.getElementById("slug");
const chat = document.getElementsByClassName("chat")[0];
const fotoUser = document.getElementsByClassName("foto-user")[0];
const headerUser = document.getElementsByClassName("user")[0];

const query = location.search.slice(1);
const chaveValor = query.split("=");
const valor = chaveValor[1];
const user = valor;

const tinyUser = user.toLowerCase();
const isUser = users.filter((userLaco) => tinyUser === userLaco.user)[0];

const ortherUser = tinyUser === "vitor" ? "luan" : "vitor";
const isOrtherUser = users.filter(
  (userLaco) => ortherUser === userLaco.user
)[0];

headerUser.innerText = isOrtherUser.contato;
fotoUser.src = isOrtherUser.img;

const mensagens = [];

function carregarMensagem(e) {
  event.preventDefault();

  const slug = elemSlug.value;
  const sessionUser = users.filter((queryUser) => queryUser.user == user);

  if (!user || !slug || !sessionUser) {
    alert("Tente novamente"); // TENTA FAZER ALGO BONITO AQUI
  } else {
    if (!!isUser) {
      const ultimaMensagem = mensagens.pop();
      const isUltimoUser = ultimaMensagem?.user === tinyUser;

      const mensagem = {
        user,
        slug,
        slugHTML: `
            <div class="${
              true ? "every-menssage outro-lado" : "every-menssage"
            }" >
                <img src="${isUser.img}" class="foto-user"
                 ${isUltimoUser ? 'style="visibility: hidden;"' : ""} />
                <div class="menssage">
                    <div class="user" 
                    ${isUltimoUser ? 'style="display:none"' : ""}> 
                    ${isUser.contato}
                    </div>
                    <div class="slug">${slug}</div>
                </div>
          </div>
            `,
      };
      mensagens.push(mensagem);
      elemSlug.focus();
      elemSlug.value = "";
      chat.innerHTML += mensagem.slugHTML;
    }
  }
}
