console.log('curso de javascript web moderno/fundamentos:Entendo Null Undefined ') //sábado,24/04/2021;22:04:25 h +|-
let valor // Nunca inicie assim
valor = null // Ausência de valor
console.log(valor)
/*
 console.log(valor.toString())
                 ^

TypeError: Cannot read property 'toString' of null
    at Object.<anonymous> (/home/frontenddeveloper/curso_de_javascript_web_moderno/exercicios-js/Fundamentos/nullundefined.js:5:20)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)
 */
const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto)
produto.preco =  undefined // Evitar "Undefined"
console.log(!!produto.preco)
console.log(produto)
produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)

