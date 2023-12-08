//Declaration Files
//.d.ts

//Podemos criar arquivos focados apenas na declaração de tipos e interfaces, estes devem ser terminados em .d.ts.
//O TypeScript não irá compilar eles, mas os tipos declarados poderão ser utilizados globalmente na sua aplicação.
//Esse tipo de declaração é comum em bibliotecas criadas em JavaScript que desejam dar suporte ao uso da mesma em TypeScript.

export const livro: Produto = {
  nome: 'O Senhor dos Anéis',
};


//Declaração Global
//Não é necessário criar um arquivo global ou .d.ts para ter um tipo global. É possível também declarar dentro de um arquivo do tipo module, usando o declare global {}.

// declare global2 {
//     interface Produto2 {
//       nome: string;
//       preco: number;
//     }
//   }