//@ts-check

//O VS Code já vem com o TypeScript (TS) instalado. Enquanto escrevemos JavaScript, serviços do TS rodam na sua máquina e já te oferecem funcionalidades como a sugestão de métodos/propriedades do tipo.
//Ao adicionar um comentário //@ts-check no início de um arquivo JS, o editor passará a indicar erros que seriam pegos pelo TS.

const frase = "Front End";
const total = 100.05;
const empresas = ["Apple", "Microsoft"];
const body = document.body;
const button = document.querySelector("button");

frase.toLowerCase();
// total.toLowerCase() // não funciona pois é um metódo de string

total.toFixed();

empresas.map((empresa) => empresa.toLowerCase());

console.log(button);
// button.click();

body.style.background = "#000";

//const operacao = true + "teste" - (4 * {}) / [];
const strings = "Front " + "End";
const numbers = 100 + 200;
console.log(strings, numbers);