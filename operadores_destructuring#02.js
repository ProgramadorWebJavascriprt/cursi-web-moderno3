console.log('curso de javascript web moderno/fundamentos:Operadores:Destructuring #02;') //segunda-feira,03/05/2021;22:16:17 h +|-
// usando a estrutura de array
const [a] = [10]
console.log('a é:',a)
const [n1, ,n3, ,n5, n6 = 0] = [10, 7 ,9, 8]
console.log('n1 e:',n1, 'ignorei', 'n3 é:',n3, 'ignorei', 'n5 é',n5 , 'n6 é:',n6)
console.log(n1, n3, n5, n6)
const [,[,nota]] = [[,8,9],[9, 6, 8]]
console.log(nota)
