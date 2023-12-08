//module
//Se usarmos o import/export em qualquer momento em um arquivo .ts, o TypeScript irá tratar o mesmo como o module. Consequentemente, o seu escopo não será mais global.

// script.ts
import pluginSlide from './pluginSlide.js';

pluginSlide('div');

console.log(URL_BASE);