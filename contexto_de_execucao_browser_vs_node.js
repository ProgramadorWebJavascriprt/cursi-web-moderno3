console.log('curso de javascript web moderno/fundamentos:Contexto de Execução: Browser vs Node;') //segunda-feira,10/05/2021;19:30:00 h +|-
/*
explica o problema de JavaScript...
window
Window {0: global, window: Window, self: Window, document: document, name: "", location: Location, …}
this
Window {0: global, window: Window, self: Window, document: document, name: "", location: Location, …}
this === window
true
vaa
VM238:1 Uncaught ReferenceError: vaa is not defined
    at <anonymous>:1:1
(anonymous) @ VM238:1
var a = "Texto"
undefined
window.a
"Texto"
var a = 123
undefined
window.a456
undefined
let b = 123
undefined
this.b 
undefined
b
123
const c = 456
undefined
window.c 
undefined
function f1() { return this ===   window }
undefined
f1()
true
window.f1() 
true
this.f1()
true
const f2() => console.log(this === window )
VM951:1 Uncaught SyntaxError: Missing initializer in const declaration
const f2 = () => console.log( this === window )
undefined
f2()
VM1072:1 true
undefined
this.f2()
VM1124:1 Uncaught TypeError: this.f2 is 456not a function
    at <anonymous>:1:6
(anonymous) @ VM1124:1
window.f2()
VM1169:1 Uncaught TypeError: window.f2 is not a function
    at <anonymous>:1:8
(anonymous) @ VM1169:1
const f2 = 123
VM1204:1 Uncaught SyntaxError: Identifier 'f2' has already been declared
let pessoa = {nome : 'Ana", falar: function() { return `Eu sou ${this.nome}`}}
undefined
pessoa.falar()
"Eu sou Ana"
this.nome 
undefined
this === window 
true 

*/ 

let a = 3
global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(this.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)
// module.exports = { c: 456, d: false, e: 'teste' }
abc = 3 // não faça isso em casa !!!
console.log(global.abc) // criando uma variável loucamente sem var e let...
