//Type Assertion
//as

// const video = document.querySelector('.player') as HTMLVideoElement;
// // erro runtime, não existe volume de null
// video.volume;

// erro TS, possíveis dados devem ser compatíveis com Element | null
// const link = document.querySelector('.link') as string;

//any
//Podemos usar o Type Assertion para definir que um tipo any é qualquer tipo de dado possível.

interface Produto {
  nome: string;
  preco: number;
}

async function fetchProduto() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  return response.json() as Promise<Produto>;
}

// Podemos usar o as em diferentes locais.
async function handleProduto1() {
  const produto = await fetchProduto();
  produto.nome;
}

async function handleProduto2() {
  const produto = (await fetchProduto()) as Produto;
  produto.nome;
}

async function handleProduto3() {
  const produto = await fetchProduto();
  (produto as Produto).nome;
}

//! non-null operator
//Indica que não existe a possibilidade do dado ser null. Cuidado com o uso, pois pode levar a erros no runtime. Use apenas se tiver certeza.
const video = document.querySelector("video")!;
// erro runtime, não existe volume de null
video.volume;

// erro runtime
document.querySelector("a")!.href = "https://www.origamid.com";

const video1 = document.querySelector(".player") as HTMLVideoElement;
const video2 = <HTMLVideoElement>document.querySelector(".player");
const video3 = document.querySelector<HTMLVideoElement>(".player");
const video4 = document.querySelector(".player");

video1.volume;
video2.volume;
video3?.volume;
(video4 as HTMLVideoElement).volume;
