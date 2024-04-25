const notas = [10, 6, 8];
console.log(notas + ' - Array Inicial')
notas.push(7) // adicionando valores no final do array
console.log(notas + ' - Array com item adicionado')
notas.pop() // excluindo elementos sempre do final do array
console.log(notas + ' - Array com item removido')

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
media.toFixed(2) // definindo quantidade de casas pós vírgula