const formulario = document.getElementById("formulario");
const mensafem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {event.preventDefault(); })
    //código executando no envio 

const nome = document.getElementById("nome") .value;

mensagem.innerHTML = "Cadastro realizado com sucesso," + nome + "!";

function limparFormulario() { document.getElementById("formulario").reset();
    document.getElementById("mensagem") .innerHTML = ""; }