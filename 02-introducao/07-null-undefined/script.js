"use strict";
//Null e Undefined
//null
//null é um tipo primitivo que representa a ausência de valor. É comum em funções do DOM que fazem uma busca, retornarem null quando não são bem sucedidas.
const button = document.querySelector("button");
const config = localStorage.getItem("config");
if (button !== null) {
    button.click();
}
if (button) {
    button.click();
}
if (button)
    button.click();
button?.click();
console.log(typeof null);
//undefined
//undefined representa variáveis/propriedades que foram instanciadas, porém, os seus valores ainda não foram definidos.
let total;
console.log(total); // undefined
const data = {};
const livro = {};
const jogo = {
    nome: 'Ragnarok',
};
jogo.nome?.toLowerCase();
livro.nome?.toLowerCase();