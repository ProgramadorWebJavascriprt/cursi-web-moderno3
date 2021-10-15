console.log('curso de javascript web moderno/fundamentos:Usando Let em Loop #01') //sábado,01/05/2021;10:12:00 h +|-
for (let i = 0;i < 10; i++) {
    console.log('O valor de i {dentro} é:', i) 
    /*executa só aqui:
    
    O valor de i {dentro} é: 0
O valor de i {dentro} é: 1
O valor de i {dentro} é: 2
O valor de i {dentro} é: 3
O valor de i {dentro} é: 4
O valor de i {dentro} é: 5
O valor de i {dentro} é: 6
O valor de i {dentro} é: 7
O valor de i {dentro} é: 8
O valor de i {dentro} é: 9
*/ 
}
/* console.log('O valor de i {fora} é:',i)
Não executa fora :
console.log('O valor de i {fora} é:',i)
                                     ^

ReferenceError: i is not defined
    at Object.<anonymous> (/home/frontenddeveloper/curso_de_javascript_web_moderno/exercicios-js/03-Fundamentos/Usando_Let_em_loop#01.js:10:38)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)
 
*/
