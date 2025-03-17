//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
  let amigo = document.getElementById("amigo");
  if (amigo.value != "") {
    amigos.push(amigo.value);
  } else {
    alert("Por favor, insira o nome de um amigo para adicionar.");
  }
}
