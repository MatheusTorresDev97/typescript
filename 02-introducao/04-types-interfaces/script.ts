//Type e Interface

//Object
//É possível definir a forma (shape) de um objeto usando uma sintaxe parecida com a de criação de objetos : {}

function preencherDados(dados: {
  nome: string;
  preco: number;
  teclado: boolean;
}) {
  document.body.innerHTML += `
    <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? "sim" : "não"}</p>
  </div>
    `;
}

preencherDados({
  nome: "Computador",
  preco: 2000,
  teclado: false,
});

preencherDados({
  nome: "Notebook",
  preco: 2500,
  teclado: true,
});

//Type
//A palavra-chave type cria um atalho (alias) para um tipo customizado.

type NumberOrString = number | string;

let total: NumberOrString = 10;
total = "200";

interface Produto {
  nome: string;
  preco: number;
  teclado: boolean;
}

function preencherDados2(dados: Produto) {
  document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>R$ ${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? "sim" : "não"}</p>
    </div>
    `;
}

type Categorias = "design" | "codigo" | "descod";

function pintarCategoria(categoria: Categorias) {
  if (categoria === "design") {
    console.log("Pintar vermelho");
  } else if (categoria === "codigo") {
    console.log("Pintar verde");
  } else if (categoria === "descod") {
    console.log("Pintar roxo");
  }
}

pintarCategoria("codigo");

//Interface
//interface geralmente da mesma forma que type, porém possui uma sintaxe diferente. As intefaces são geralmente utilizadas para definirmos objetos.
//Type para tipos primitivos e Interface para objetos.

interface InterfaceProduto {
  nome: string;
  preco: number;
  teclado: boolean;
}

type TypeProduto = {
  nome: string;
  preco: number;
  teclado: boolean;
};

function preencherDados3(dados: InterfaceProduto) {
  document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>R$ ${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? "sim" : "não"}</p>
    </div>
    `;
}

//Exercicio
//Defina a interface da API: https://api.origamid.dev/json/notebook.json e mostre os dados na tela.

async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  showProduct(data);
}

fetchProduct();

interface Empresa {
  fundacao: number;
  nome: string;
  pais: string;
}

interface Product {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

function showProduct(data: Product) {
  document.body.innerHTML += `
      <div>
        <h2>${data.nome}</h2>
        <p>${data.preco}</p>
        <div>
         <h3>${data.empresaFabricante.nome}</h3>
        </div>
        <div>
        <h3>${data.empresaMontadora.nome}</h3>
       </div>
      </div>
    `;
}
