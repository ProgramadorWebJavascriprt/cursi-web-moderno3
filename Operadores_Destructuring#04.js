console.log('curso de javascript web moderno/fundamentos:Operadores:Destructuring #04;') //terça-feira,04/05/2021;22:18:17 h +|-
// Usando parametro de uma função
function rand({ min = 0, max = 1000}) {
    if (min > max)[min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
        return Math.floor(valor)
}
console.log(rand([50, 40]))
    console.log(rand([992]))
        console.log(rand([,10]))
            console.log(rand([]))
              /*  console.log(rand())
                TypeError: Cannot destructure property `min` of 'undefined' or 'null'.
    at rand (/home/frontenddeveloper/curso_de_javascript_web_moderno/exercicios-js/03-Fundamentos/Operadores:Destructuring#04.js:3:14)
    at Object.<anonymous> (/home/frontenddeveloper/curso_de_javascript_web_moderno/exercicios-js/03-Fundamentos/Operadores:Destructuring#04.js:12:29)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)
                */