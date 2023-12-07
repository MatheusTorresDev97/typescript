//Interfaces do DOM

//querySelector
//Quando selecionamos um elemento do DOM com o querySelector, o objeto retornado dependerá da string que passarmos no método.

const video = document.querySelector("video"); // HTMLVideoElement
video?.volume;

const video2 = document.querySelector("#video");
if (video instanceof HTMLVideoElement) {
  video.volume;
}

document.querySelector("img"); // HTMLImageElement
const link1 = document.querySelector("a"); // HTMLAnchorElement
const link2 = document.querySelector("#origamid"); // Element

//querySelectorAll
//O querySelectorAll retorna uma NodeList de elementos. Não confundir o nome da interface NodeListOf com o nome da classe NodeList.

const links = document.querySelectorAll(".link");

links.forEach((link) => {
  if (link instanceof HTMLAnchorElement) {
    console.log(link.href);
  } else {
    console.log(typeof link);
  }
});

//Exercício
//1 - Selecione os elementos com a classe link.
//2 - Crie uma função que deve ser executada para cada elemento.
//3 - Modificar através da função o estilo da color e border.

links.forEach((item) => {
  if (item instanceof HTMLElement) {
    ativarElemento(item);
  }
});

function ativarElemento(elemento: HTMLElement) {
  elemento.style.color = "red";
  elemento.style.border = "2px solid red";
}
