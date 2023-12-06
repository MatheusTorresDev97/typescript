"use strict";
//Type e Interface
//Object
//É possível definir a forma (shape) de um objeto usando uma sintaxe parecida com a de criação de objetos : {}
function preencherDados(dados) {
    document.body.innerHTML += `
    <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? "sim" : "não"}</p>
  </div>
    `;
}
preencherDados({
    nome: "Computador",
    preco: 2000,
    teclado: false,
});
preencherDados({
    nome: "Notebook",
    preco: 2500,
    teclado: true,
});
let total = 10;
total = "200";
function preencherDados2(dados) {
    document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>R$ ${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? "sim" : "não"}</p>
    </div>
    `;
}
function pintarCategoria(categoria) {
    if (categoria === "design") {
        console.log("Pintar vermelho");
    }
    else if (categoria === "codigo") {
        console.log("Pintar verde");
    }
    else if (categoria === "descod") {
        console.log("Pintar roxo");
    }
}
pintarCategoria("codigo");
function preencherDados3(dados) {
    document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>R$ ${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? "sim" : "não"}</p>
    </div>
    `;
}
//Exercicio
//Defina a interface da API: https://api.origamid.dev/json/notebook.json e mostre os dados na tela.
async function fetchProduct() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const data = await response.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML += `
      <div>
        <h2>${data.nome}</h2>
        <p>${data.preco}</p>
        <div>
         <h3>${data.empresaFabricante.nome}</h3>
        </div>
        <div>
        <h3>${data.empresaMontadora.nome}</h3>
       </div>
      </div>
    `;
}
