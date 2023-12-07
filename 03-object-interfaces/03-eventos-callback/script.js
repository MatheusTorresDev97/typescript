"use strict";
//Eventos e Callback
//Eventos
//Passamos o evento como uma string e uma função de callback no método addEventListener.
//A função de callback possui um parâmetro que faz referência ao evento executado.
const button = document.querySelector("button");
function handleClick(event) {
    console.log(event.pageX);
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", handleClick);
function handleScroll(event) {
    console.log(event);
}
window.addEventListener("scroll", handleScroll);
//Event e instanceof
//Uma função, quando criada para ser executada em diferentes tipos de eventos, deve receber como parâmetro o tipo comum entre elas Event.
function ativarMenu(event) {
    console.log(event.type);
    if (event instanceof MouseEvent) {
        console.log(event.pageX);
    }
    if (event instanceof TouchEvent) {
        console.log(event.touches[0].pageX);
    }
}
document.documentElement.addEventListener("mousedown", ativarMenu);
document.documentElement.addEventListener("touchstart", ativarMenu);
document.documentElement.addEventListener("pointerdown", ativarMenu);
//this
//Dentro de uma função, o this faz referência ao objeto que executou a mesma.
//No JavaScript o this pode ser passado como o primeiro parâmetro da função, mesmo não sendo necessário informar ele durante a execução.
// function ativarMenu2(this: HTMLButtonElement, event: MouseEvent) {
//   console.log(this.innerText);
// }
// button?.addEventListener('click', ativarMenu2);
function handleClick2(event) {
    const elemento = event.currentTarget;
    if (elemento instanceof HTMLElement) {
        console.log(elemento.innerText);
    }
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", handleClick2);
//Exercício
//Utilizando a estrutura HTML/CSS abaixo, crie o script que irá fazer o botão mobile funcionar (ativar/desativar a navegação).
// Estado dos elementos
// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button
// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button
const btnMobile = document.getElementById("btn-mobile");
function toggleMenu(event) {
    const button = event.currentTarget;
    const nav = document.getElementById("nav");
    if (button instanceof HTMLElement && nav) {
        const active = nav.classList.contains("active");
        if (active) {
            nav.classList.remove("active");
            button.setAttribute("aria-expanded", "false");
            button.setAttribute("aria-label", "Abrir Menu");
        }
        else {
            nav.classList.add("active");
            button.setAttribute("aria-expanded", "true");
            button.setAttribute("aria-label", "Fechar Menu");
        }
    }
}
btnMobile === null || btnMobile === void 0 ? void 0 : btnMobile.addEventListener("pointerdown", toggleMenu);
