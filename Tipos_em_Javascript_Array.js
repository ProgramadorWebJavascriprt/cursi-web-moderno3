console.log('curso de javascript web moderno/fundamentos/Numbers:Tipos de JavaScript:Array;') //quinta-feira,22/04/2021;21:05:51 h +|-
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])
//valores[10] = 10 {[ 7.7, 8.9, 6.3, 9.2, <6 empty items>, 10 ]}
console.log(valores)
valores[4] = 10
console.log(valores)
console.log(valores.length)
valores.push({id: 3},  false, null, 'teste') // não é ideal mistura dados...
console.log(valores)
console.log(valores.pop())
delete valores[0]
console.log(valores)
console.log(typeof valores)
