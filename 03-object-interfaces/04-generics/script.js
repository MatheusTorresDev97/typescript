"use strict";
//Generics
//Um tipo genérico é uma forma de declararmos um parâmetro para a nossa função, classe ou interface.
//Esse tipo poderá ser indicado no momento do uso da função através de <Tipo>.
// Exemplo 1
// function retorno<Tipo>(a: Tipo): Tipo {
//   return a;
// }
// console.log(retorno("A Game").charAt(0)) // retorno<string>(a: string): string
// console.log(retorno(200).toFixed()); // retorno<number>(a: number): number
// console.log(retorno(true).valueOf); //retorno <bool>(a:bool)> boolean
const numeros = [1, 3, 4, 5, 3, 20, 3, 4, 5];
const frutas = ["Banana", "Pêra", "Uva", "Laranja", "Limão"];
// function firstFive(lista: number[]) {
//   return lista.slice(0, 5)
// }
// console.log(firstFive(numeros));
function firstFive(lista) {
    return lista.slice(0, 5);
}
console.log(firstFive(numeros));
console.log(firstFive(frutas));
// Exemplo 2
function notNull(arg) {
    if (arg !== null)
        return arg;
    else
        return null;
}
notNull(200)?.toFixed();
notNull("André")?.toLowerCase();
// Exemplo 3
function tipoDado(a) {
    const resultado = {
        dado: a,
        tipo: typeof a,
    };
    console.log(resultado);
    return resultado;
}
tipoDado(true);
//extends
//É possível indicar que o tipo genérico deve herdar de uma interface específica com o extends.
// Exemplo 1
function extractText(el) {
    return el.innerText;
}
const link = document.querySelector("a");
if (link) {
    console.log(extractText(link));
    // extractText<HTMLAnchorElement extends HTMLElement>(el: HTMLAnchorElement): string
}
// Exemplo 2
function $(selector) {
    return document.querySelector(selector);
}
const link2 = $("a")?.href;
//Métodos
//Métodos nativos são definidos utilizando generics, assim podemos indicar durante a execução qual será o tipo esperado.
// Define que o retorno será um HTMLAnchorElement
const link3 = document.querySelector(".link");
link3?.href;
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleData() {
    const notebook = await getData("https://api.origamid.dev/json/notebook.json");
    console.log(notebook.nome);
}
