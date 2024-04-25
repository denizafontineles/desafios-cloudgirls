/*
For clássico


const notas = [10, 8.5, 5, 6.5, 8, 7.5];

for (let indice = 0; indice < notas.length; indice++) {
    console.log(indice, notas[indice]); // indice= mostra todos os índices do array e no outro, notas[indice] = exibe todos os item dentro do array
}
*/

/*
EXERCÍCIO SOMA NOTAS

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;
console.log(`a média das notas é ${media}`);

*/


/*

loops em matrizes

*/

/*

const notas1 = [10, 6.5, 8 ,7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]
 
const notasGerais = [notas1,notas2,notas3]
 
let media = 0
 
for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}
 
media = media/notasGerais.length
 
console.log(media)

---------------------------------------------------------------------------------------*/


const precos = [5.5, 6.2, 14, 19.5];

let desconto = 0.90;

for (let i = 0; i < precos.length; i++) {
 precos[i] = precos[i] * desconto;
}

console.log(precos);

