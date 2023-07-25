// módulo: operacoes.js
export function somar(a, b) {
    return a + b;
}

// arquivo principal: main.js
import { somar } from './operacoes.js';

console.log(somar(5, 3)); // Saída: 8
