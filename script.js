let arreglo = [];

const formulario = document.getElementById("formulario")
const input = document.getElementById("input")
const lista = document.getElementById("lista")

const mostrarLista = () => {
    lista.innerHTML = arreglo.map((item) =>
        `<div class="tarjeta"> ${item}</div>`
    ).join("");
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const texto = input.value.trim();
    if (texto === "") return;

    arreglo.push(texto)
    input.value = "";
    mostrarLista();
});
