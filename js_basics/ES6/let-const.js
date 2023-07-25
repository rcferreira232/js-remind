// Exemplo com let
let nome = 'João';
if (true) {
  let nome = 'Maria';
  console.log(nome); // Saída: Maria
}
console.log(nome); // Saída: João

// Exemplo com const
const PI = 3.14159;
// PI = 3.14; // Isso resultaria em um erro, pois não podemos reatribuir uma constante.
