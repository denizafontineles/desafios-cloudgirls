/*
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizados = new Set(nomes); //Set é um conjunto - tipo um array mas não é array

nomesAtualizados.push('Juliana');

console.log(nomesAtualizados);
*/




const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const nomesAtualizados = new Set(nomes);

const listaNomesAtualizados = [...new Set(nomes)];

// console.log(nomesAtualizados);
console.log(listaNomesAtualizados);

