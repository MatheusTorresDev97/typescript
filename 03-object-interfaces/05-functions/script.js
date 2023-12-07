"use strict";
//Functions
//A interface de uma função é definida durante a sua declaração.
function somar(a, b, c) {
    return a + b + (c ? c : 0);
}
somar(3, 4);
somar(3, 4, 1);
const subtrair = (a, b) => a - b;
subtrair(10, 2);
//Void
//No JavaScript, uma função sem return irá retornar undefined. No TypeScript o retorno é definido como void.
//Isso evita usos errados como checagens booleanas de métodos que não possuem retorno.
function pintarTela(cor) {
    document.body.style.background = cor;
}
pintarTela("black");
const btn = document.querySelector("button");
// Erro, void não pode ser verificado
// if (btn && btn.click()) {
// }
// Se a função tiver qualquer tipo de retorno,
// ela não terá mais o void como uma opção e sim o undefined
function isString(value) {
    if (typeof value === "string") {
        return true;
    }
}
if (isString("teste")) {
    console.log("É string");
}
function calcular(forma) { }
function normalizar(valor) {
    if (typeof valor === "string") {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map((item) => item.trim().toLowerCase());
    }
}
normalizar(" Produto ");
normalizar(["Banana ", " UVA"]);
function $(seletor) {
    return document.querySelector(seletor);
}
$("a")?.href;
$("video")?.volume;
$(".teste")?.innerHTML;
function arredondar(valor) {
    if (typeof valor === "number") {
        return Math.ceil(valor);
    }
    else {
        return Math.ceil(Number(valor)).toString();
    }
}
console.log(arredondar(200.32));
console.log(arredondar("200.32"));
