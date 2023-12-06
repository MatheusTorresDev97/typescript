"use strict";
//script.ts e tsc
//Os principais programas que executam JavaScript (browser/node), não conseguem executar TypeScript.
// Por isso precisamos de um compilador para gerar um arquivo JavaScript a partir de um TypeScript.
//npm install -g typescript
//tsc --init
//tsconfig.json
// {
//     "compilerOptions": {
//       "target": "ESNext",
//       "strict": true
//     }
//   }
//tsc -w
const total = 100;
function somar(a, b) {
    return a + b;
}
console.log(somar(5, 2));
