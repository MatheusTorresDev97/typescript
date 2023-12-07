//Tuples
//Tuples são arrays que possuem dados em posições fixas.

const produto1: (string | number)[] = ["Notebook", 2500];
const produto2: [string, number] = ["Notebook", 2500];

const nome1 = produto1[0]; // string | number
const nome2 = produto2[0]; // string

const [nome, preco] = produto2;

//as const
//Torna um dado readonly e infere o tipo de dado mais específico possível. Em métodos que retornam Array's, as mesmas são transformadas em Tuples.

function getText(selector: string) {
  const el = document.querySelector<HTMLElement>(selector);
  if (el) {
    return [el, el.innerText] as const;
  } else {
    return null;
  }
}

const button = getText("button");

if (button) {
  const [buttonElement, buttonText] = button;
}

//Exercicios
// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela

async function fetchVendas() {
    const response = await fetch("https://api.origamid.dev/json/vendas.json");
    const data = await response.json();
    somarVendas(data)
  }
  
  interface ProdutoDetalhes {
    marca: string;
    cor: string;
  }
  
  type Venda = [string, number, string, ProdutoDetalhes];
  
  function somarVendas(vendas: Venda[]) {
    const total = vendas.reduce((total,venda) => {
      return total + venda[1]
    }, 0)
    document.body.innerHTML += `<p>Total: R$ ${total}</p>`;
  }
  
  fetchVendas();