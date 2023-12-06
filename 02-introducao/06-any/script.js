"use strict";
//Any
//O any indica que o dado pode conter qualquer tipo de dado do TypeScript. Devemos evitar ao máximo o uso do any, pois o mesmo remove todas as seguranças e conveniências que o TS fornece.
function normalizar(texto) {
    return texto.trim().toLowerCase();
}
normalizar(" DeSIGN");
normalizar(200);
//Any Implicito
//Fora do modo estrito, o TypeScript permitirá o uso de parâmetros sem especificarmos o tipo. Esses parâmetros terão o tipo implícito de any.
//Uso do Any
//Em alguns casos o any faz sentido, como no caso da função json() onde qualquer tipo de dado pode ser retornado, dependendo da API que acessarmos.
async function fetchJSON(url) {
    const response = await fetch(url);
    const data = await response.json();
    manipularData(data);
}
fetchJSON("https://api.origamid.dev/json/cursos.json");
function manipularData(data) {
    console.log(data.nome);
}
//Any e Erros
//Usar o any pode quebrar a sua aplicação.