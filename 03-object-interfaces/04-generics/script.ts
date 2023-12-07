//Generics

//Um tipo genérico é uma forma de declararmos um parâmetro para a nossa função, classe ou interface.
//Esse tipo poderá ser indicado no momento do uso da função através de <Tipo>.

// Exemplo 1
// function retorno<Tipo>(a: Tipo): Tipo {
//   return a;
// }

// console.log(retorno("A Game").charAt(0)) // retorno<string>(a: string): string
// console.log(retorno(200).toFixed()); // retorno<number>(a: number): number
// console.log(retorno(true).valueOf); //retorno <bool>(a:bool)> boolean

const numeros = [1, 3, 4, 5, 3, 20, 3, 4, 5];
const frutas = ["Banana", "Pêra", "Uva", "Laranja", "Limão"];

// function firstFive(lista: number[]) {
//   return lista.slice(0, 5)
// }

// console.log(firstFive(numeros));

function firstFive<TipoLista>(lista: TipoLista[]): TipoLista[] {
  return lista.slice(0, 5);
}

console.log(firstFive<number>(numeros));
console.log(firstFive<string>(frutas));

// Exemplo 2
function notNull<Tipo>(arg: Tipo) {
  if (arg !== null) return arg;
  else return null;
}

notNull(200)?.toFixed();
notNull("André")?.toLowerCase();

// Exemplo 3
function tipoDado<T>(a: T): { dado: T; tipo: string } {
  const resultado = {
    dado: a,
    tipo: typeof a,
  };
  console.log(resultado);
  return resultado;
}

tipoDado(true);

//extends
//É possível indicar que o tipo genérico deve herdar de uma interface específica com o extends.

// Exemplo 1
function extractText<Tipo extends HTMLElement>(el: Tipo): string {
  return el.innerText;
}

const link = document.querySelector("a");

if (link) {
  console.log(extractText(link));
  // extractText<HTMLAnchorElement extends HTMLElement>(el: HTMLAnchorElement): string
}

// Exemplo 2
function $<Tipo extends Element>(selector: string): Tipo | null {
  return document.querySelector(selector);
}

const link2 = $<HTMLAnchorElement>("a")?.href;

//Métodos
//Métodos nativos são definidos utilizando generics, assim podemos indicar durante a execução qual será o tipo esperado.

// Define que o retorno será um HTMLAnchorElement
const link3 = document.querySelector<HTMLAnchorElement>(".link");
link3?.href;

async function getData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

interface Notebook {
  nome: string;
}

async function handleData() {
  const notebook = await getData<Notebook>(
    "https://api.origamid.dev/json/notebook.json"
  );
  console.log(notebook.nome);
}
