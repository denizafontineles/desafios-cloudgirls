//----------------------------------------------------------------------------------


/*
const notas = [10, 9.5, 8, 7, 6];


-----------1
const notasAtualizadas = notas.map(function (nota) { 
    return nota + 1;
})
contole.log(notasAtualizadas);
----------- 2
const notasAtualizadas = notas.map((nota) => {
    return nota + 1;
})
console.log(notasAtualizadas);

const notasAtualizadas = notas.map((nota) => nota + 1)

console.log(notasAtualizadas);

--------- Resolução com IF ternário:

const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10: nota + 1);

console.log(notasAtualizadas);

*/

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados)
