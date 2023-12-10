"use strict";
let valor = 3000;
let nome = "";
let isPago = false;
let qualquer = "";
qualquer = 25;
const lista = [];
lista.push(13, 22.5, 22, 89, 1.58);
var NovaTipoTransacao;
(function (NovaTipoTransacao) {
    NovaTipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    NovaTipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    NovaTipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(NovaTipoTransacao || (NovaTipoTransacao = {}));
const novaTransacao = {
    tipoTransacao: NovaTipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0,
};
//# sourceMappingURL=typescript.js.map