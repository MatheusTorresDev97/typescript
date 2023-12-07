//class
//Em JavaScript, Classes class são funções construtoras que geram objetos.
//Quando definimos uma classe, o TypeScript gera a interface do objeto produzido pela mesma.

class Produto {
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
}

//InstanceOf
//Existem funções que retornam diferentes tipos de objetos.
// Com a palavra-chave instanceof podemos verificar se um objeto é uma instância (foi construído ou herda) de uma função construtora (class).

//Extends
//O instanceof verifica se a função construtora herda de outra (extends).

class Livro extends Produto {
  autor: string;
  constructor(nome: string, autor: string) {
    super(nome);
    this.autor = autor;
  }
}

class Jogo extends Produto {
  jogadores: number;
  constructor(nome: string, jogadores: number) {
    super(nome);
    this.jogadores = jogadores;
  }
}

function buscarProduto(busca: string) {
  if (busca === "O Hobbit") {
    return new Livro("O Hobbit", "J. R. R. Tolkien");
  }
  if (busca === "Dark Souls") {
    return new Jogo("Dark Souls", 1);
  }
  return null;
}

const produto = buscarProduto("O Hobbit");

if (produto instanceof Livro) {
  produto.autor;
}

if (produto instanceof Jogo) {
  produto.nome;
}

//instanceof e interface
//O instanceof é um operador que existe no JavaScript.
//Se você definir a interface de um objeto apenas com o interface e não possuir uma classe construtora do mesmo, não será possível utilizar o instanceof na interface.

//Exercício
//1 - Selecione o link utilizando o método getElementById.

//2 - Substitua o href do link (HTMLAnchorElement) de http:// para https://.

const link = document.getElementById("origamid");

if (link instanceof HTMLAnchorElement) {
  link.href = link.href.replace("http://", "https://");
}
