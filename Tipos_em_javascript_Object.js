console.log('curso de javascript web moderno/fundamentos/Numbers:Tipos de JavaScript:Object;') //quinta-feira,22/04/2021;21:23:51 h +|-
const prod1 = {} // Objeto=> Chave é valores
prod1.nome = 'Notebook Lenovo S!45'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaço
console.log(prod1)
console.log('====*===*===*====')
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
          marca:'Cobra da Água',
          obj:{
              linhadeproducao:'Linha1',
          }
    }
}
console.log(prod2)
/*
    Error: Parse error on line 1:
{	nome: 'camisa polo',
--^
Expecting 'STRING', '}', got 'undefined'
JSON não é a mesma coisa  que objeto;
JSON é um Objeto Textual;
*/ 
