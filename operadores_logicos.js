console.log('curso de javascript web moderno/fundamentos:Operadores Lógicos;') //quinta-feira,06/05/2021;21:30:00 h +|-
function compras(trabalho1, trabalho2) {
const comprarsorvete = trabalho1 = trabalho2
const comprarsorTV50 = trabalho1 && trabalho2
// const comprarTv32 = !!(trabalho1 'chapeu' trabalho2)// bitwise xor
const comprarsorTV32 = trabalho1 != trabalho2
const manterSaudavel = !comprarsorvete // operador unário
return {
    comprarsorvete, comprarsorTV50, comprarsorTV32, manterSaudavel
   }
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

