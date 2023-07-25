function somar(...numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

console.log(somar(1, 2, 3)); // Saída: 6
console.log(somar(10, 20, 30, 40)); // Saída: 100
