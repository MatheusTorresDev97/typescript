//Union Types
//É comum termos funções que podem retornar ou receber tipos diferentes.
//Para isso usamos a barra vertical string | number | boolean.

let total: string | number = 200;
total = "300";

//Funções
//Funções podem receber parâmetros com diferentes tipos e também podem retornar diferentes tipos de dados.

function isNumber(value: string | number) {
  if (typeof value === "number") {
    return true;
  } else {
    return false;
  }
}

//DOM
//Funções que selecionam elementos do DOM geralmente retornam null como uma possibilidade de tipo, pois o TypeScript não tem acesso prévio ao DOM para saber se o elemento existe ou não.

// Retorna HTMLButtonElement | null
const button = document.querySelector("button");
// Optional chaining
// Executa click() se button for diferente de null/undefined
button?.click();

//Exercício
// 1 - Crie uma função chamada toNumber ok
// 2 - A função pode receber number | string ok
// 3 - Se a função receber um número, retorne um número ok
// 4 - Se a função receber uma string, retorne um número ou seja transforme a string em um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")

function toNumber(value: number | string) {
  if (typeof value === "string") {
    return Number(value);
  } else if (typeof value === "number") {
    return value;
  } else {
    throw "value deve ser um número ou uma string";
  }
}
