console.log('curso de javascript web moderno/fundamentos:Hoisting;') //sábado,01/05/2021;10:43:00 h +|-
console.log('O valor de "a" é =', a)
var a = 2 // vai para cima;
console.log('O valor de "a" é =', a)
console.log('  # Dentro de uma Função:')
function teste(){
    console.log('O valor de "a" é =', a)
var a = 3 // vai para cima;
console.log('O valor de "a" é =', a)
}
teste() // O efeito se o mesmo...
console.log('======================================================================================')
  console.log('Hoisting com "Let" é {Não ocorre}') 
   // console.log('O valor de "b" é =', b)
     /* let b = 7 // vai para cima; só roda aqui........;
console.log('O valor de "b" é {ReferenceError: b is not defined
    at Object.<anonymous> (/home/frontenddeveloper/curso_de_javascript_web_moderno/exercicios-js/03-Fundamentos/hoisting.js:13:35)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)}=', b) 

    */ 
