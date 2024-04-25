/*Desafio: dividindo salas

const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = listaEstudantes.slice(0, listaEstudantes.length/2);
const sala2 = listaEstudantes.slice(listaEstudantes.length/2);

console.log(sala1);
console.log(sala2);

*/

/*---------------------------------------------------------------------------------------

Desafio: atualizando listas 

const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

listaEstudantes.splice(1, 4, 'Rodrigo'); // splice pode remover de um ponto ao outro e ao mesmo tempo, pode adicionar itens também sem precisar do push

console.log(listaEstudantes);
// Resultado: [ 'João', 'Rodrigo', 'Leo' ]

*/

/*---------------------------------------------------------------------------------------

Concatenando arrays 

const salaJS = ['Evaldo', 'Camis', 'Mari'];
const salaPython = ['Ju', 'Leo', 'Raquel'];

const salasUnificadas = salaJS.concat(salaPython);
console.log(salasUnificadas);
// Resultado: [ 'Evaldo', 'Camis', 'Mari', 'Ju', 'Leo', 'Raquel' ]
*/

/*---------------------------------------------------------------------------------------

Array de duas dimensões



const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias]; //array dentro de arry

console.log('Lista com os Arrays: ' + lista);

console.log(
    `a aluna da posição 1 da lista é: ${lista[0][1]}.
    a nota dessa aluna é ${lista[1][1]}`);
    
    console.log(lista[0]);

Resultado:
    a aluna da posição 1 da lista é: Juliana.
    a nota dessa aluna é 8
[ 'João', 'Juliana', 'Caio', 'Ana' ]
*/


