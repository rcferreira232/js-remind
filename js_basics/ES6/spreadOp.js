const numeros1 = [1, 2, 3];
const numeros2 = [...numeros1, 4, 5];
console.log(numeros2); // Saída: [1, 2, 3, 4, 5]

const objeto1 = { a: 1, b: 2 };
const objeto2 = { ...objeto1, c: 3 };
console.log(objeto2); // Saída: { a: 1, b: 2, c: 3 }
