"use strict";
//Type Assertion
//as
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchProduto() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.origamid.dev/json/notebook.json");
        return response.json();
    });
}
// Podemos usar o as em diferentes locais.
function handleProduto1() {
    return __awaiter(this, void 0, void 0, function* () {
        const produto = yield fetchProduto();
        produto.nome;
    });
}
function handleProduto2() {
    return __awaiter(this, void 0, void 0, function* () {
        const produto = (yield fetchProduto());
        produto.nome;
    });
}
function handleProduto3() {
    return __awaiter(this, void 0, void 0, function* () {
        const produto = yield fetchProduto();
        produto.nome;
    });
}
//! non-null operator
//Indica que não existe a possibilidade do dado ser null. Cuidado com o uso, pois pode levar a erros no runtime. Use apenas se tiver certeza.
const video = document.querySelector("video");
// erro runtime, não existe volume de null
video.volume;
// erro runtime
document.querySelector("a").href = "https://www.origamid.com";
const video1 = document.querySelector(".player");
const video2 = document.querySelector(".player");
const video3 = document.querySelector(".player");
const video4 = document.querySelector(".player");
video1.volume;
video2.volume;
video3 === null || video3 === void 0 ? void 0 : video3.volume;
video4.volume;
