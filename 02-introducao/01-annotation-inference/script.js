"use strict";
//Annotation (anotação)
//Com o TypeScript podemos indicar qual será o tipo de dado de uma variável através de anotações (: string).
const produto = "Livro"; //tipo string
const preco = 200; //tipo number
const carro = {
    marca: "Audi",
    portas: 5,
};
//Inference (Inferência)
//O TS consegue inferir o tipo de dado de expressões em JavaScript. Sempre que ele conseguir inferir, você não precisa fazer a anotação do dado.
const novoProduto = "Game";
let novoPreco = 300;
const novoCarro = {
    marca: "Ferrari",
    portas: 4,
};
const barato = novoPreco < 200 ? true : "produto caro";
//Funções
//As anotações serão necessárias quando lidamos com funções.
function somar(a, b) {
    return a + b;
}
somar(5, 10);
// somar("10", "10");
const nintendo = {
    nome: "Nintendo",
    preco: "2000",
};
function transformarPreco(produto) {
    produto.preco = "R$ " + produto.preco;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
//Exercício 1
//Conserte a função com TypeScript
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
//Exercício 2
//Conserte as funções com TypeScript
const input = document.querySelector("input");
const total = localStorage.getItem("total");
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    const p = document.querySelector("p");
    if (p) {
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
    }
}
function totalMudou() {
    if (input) {
        localStorage.setItem("total", input.value);
        calcularGanho(Number(input.value));
    }
}
input && input.addEventListener("keyup", totalMudou);
