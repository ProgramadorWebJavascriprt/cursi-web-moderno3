console.log('curso de javascript web moderno/fundamentos:Operadores:Destructuring #01;') //segunda-feira,03/05/2021;22:16:17 h +|-
// novo recurso do ES2015;
// Usando aparti de um objeto;
const pessoa = {
    nome:'Ana',
        idade: 25,
            endereco: {
                logradouro: 'Rua ABC',
                    numero:1000
            }
}
const {nome, idade} = pessoa // tirei para Trabalhar
    console.log(nome, idade)
        const { nome: n, idade:i } = pessoa
            console.log('nome "n" é:',n,'idade "i" é:', i)
const { sobrenome, bemHumorada = true} = pessoa
    console.log(sobrenome, bemHumorada)
const { endereco:{logradouro,numero,cep }} = pessoa
    console.log(logradouro, numero, cep)
/*const {conta:{ag, num}} = pessoa
  console.log(ag, num)
  TypeError: Cannot destructure property `ag` of 'undefined' or 'null'.
    at Object.<anonymous> (/home/frontenddeveloper/curso_de_javascript_web_moderno/exercicios-js/03-Fundamentos/tempCodeRunnerFile.js:19:8)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)*/



