console.log('curso de javascript web moderno/fundamentos:Operadores:Destructuring #03;') //segunda-feira,03/05/2021;22:16:17 h +|-
// Usando parametro de uma função
function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
        return Math.floor(valor)
}
const obj= {max:50, min: 40 }
    console.log(rand(obj))
        console.log(rand({min: 955}))
            console.log(rand({}))
                console.log(rand())