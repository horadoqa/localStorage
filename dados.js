const input = document.getElementById("meuInput");
const botao = document.getElementById("salvarBtn");
const apagarBtn = document.getElementById("apagarBtn");
const valorSalvo = document.getElementById("valorSalvo");

botao.addEventListener("click", function () {
    const valor = input.value;

    localStorage.setItem("nome", valor);

    valorSalvo.textContent = valor;
});

const valor = localStorage.getItem("nome");

if (valor) {
    valorSalvo.textContent = valor;
    input.value = valor;
}

apagarBtn.addEventListener("click", function () {
    localStorage.removeItem("nome");
    valorSalvo.textContent = "";
    input.value = "";
});