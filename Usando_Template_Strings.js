
console.log('curso de javascript web moderno/fundamentos:Usando Templte Strings') //terça-feira,20/04/2021;21:12:59 h +|-
const nome = 'Heloisa'
const concatenacao = 'Olá' + nome + '!'
const template = `
Olá
${nome}!`
console.log(concatenacao, template)
// expressoes...
console.log(`1 + 1 = ${1 + 1}`)
const up = texto => texto.toUpperCase()
console.log(`Ei...${up('Cuidado')}!`)
