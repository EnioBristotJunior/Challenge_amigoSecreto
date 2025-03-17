//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
  let amigo = document.getElementById("amigo");
  if (amigo.value != "") {
    amigos.push(amigo.value);
    limparCampo();
    exibirArray();
  } else {
    alert("Por favor, insira o nome de um amigo para adicionar.");
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    adicionarAmigo();
  }
});
function limparCampo() {
  let amigo = document.getElementById("amigo");
  amigo.value = "";
}

function exibirArray() {
  let texto = "";
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    texto += `${amigos[i]}\n`;
  }
  lista.innerHTML = texto;
}

function sortearAmigo() {
  if (amigos.length >= 1) {
    let amigoEscolhido = parseInt(Math.random() * amigos.length);
    console.log(amigoEscolhido);
    exibirResultado(amigoEscolhido);
  } else {
    alert("Adicione um amigo primeiro.");
  }
}

function exibirResultado(i) {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  let amigoSecreto = amigos[i];
  resultado.innerHTML = amigoSecreto;
  limparArray();
}

function limparArray() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos = [];
}
