import Estatisticas from "./Estatisticas.js";
import fetchData from "./fetchData.js";
import normalizarTransacao from "./normalizarTransacao.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json?");
    if (!data)
        return;
    const transacoes = data.map(normalizarTransacao);
    preencherTabela(transacoes);
    preencherEstatisticas(transacoes);
}
function preencherLista(lista, containerId) {
    const containerElemento = document.getElementById(containerId);
    if (containerElemento) {
        Object.keys(lista).forEach(key => {
            containerElemento.innerHTML += `<p>${key}: ${lista[key]}</p>`;
        });
    }
}
function preencherEstatisticas(transacoes) {
    const data = new Estatisticas(transacoes);
    preencherLista(data.pagamento, 'pagamento');
    preencherLista(data.status, 'status');
    const pagamentoElemento = document.getElementById('pagamento');
    if (pagamentoElemento) {
        Object.keys(data.pagamento).forEach(key => {
            pagamentoElemento.innerHTML += `<p>${key}: ${data.pagamento[key]}</p>`;
        });
    }
    const totalElemento = document.querySelector("#total span");
    if (totalElemento) {
        totalElemento.innerText = data.total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }
    const diaElemento = document.querySelector("#dia span");
    if (diaElemento) {
        diaElemento.innerText = data.melhorDia[0];
    }
}
function preencherTabela(transacoes) {
    const tabela = document.querySelector("#transacoes tbody");
    if (!tabela)
        return;
    transacoes.forEach((transacao) => {
        tabela.innerHTML += `
        <tr>
          <td>${transacao.nome}</td>
          <td>${transacao.email}</td>
          <td>${transacao.moeda}</td>
          <td>${transacao.pagamento}</td>
          <td>${transacao.status}</td>
        </tr>
      `;
    });
}
handleData();
//# sourceMappingURL=script.js.map