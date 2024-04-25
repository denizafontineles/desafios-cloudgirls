
/*diferença entre i++ e ++i

i++ = incremento é depois

let i = 5;
console.log(i);     // Saída: 5 (retorna o valor atual de i)
console.log(i++);   // Saída: 5 (retorna o valor atual de i)
console.log(i);     // Saída: 6 (i foi incrementado após a execução)

++i = incremento é antes

let j = 8;
console.log(j);   // Saída: 8 (retorna o valor atual de i)
console.log(++j); // Saída: 9 (j foi incrementado antes de ser usado)
console.log(j);   // Saída: 9 (j já foi incrementado)

*/

let i = 5;
let valorA = i++;
let valorB = ++i;

console.log("O valor de valorA é:", valorA);
console.log("O valor de valorB é:", valorB);

