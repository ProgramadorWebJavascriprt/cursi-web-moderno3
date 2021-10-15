console.log('curso de javascript web moderno/fundamentos:Notação Ponto;') //segunda-feira,03/05/2021;21:40:40 h +|-
console.log('Fazer um arredondamento,para cima é:',Math.ceil(6.1))
const obj1 = {}
obj1.nome = 'Bola'
// Obj1['nome'] = 'Bola2'
console.log('Objeto1 é:',obj1.nome)
function Obj(nome) {
    this.nome = nome // "THIS"usando a notação Ponto fico visivél;
        this.exec = function(){
            console.log('Exerc...')
        }
}
const obj2 = new Obj('Cadeira')
  const obj3 = new Obj('Mesa')
    console.log('Objeto 2 é:',obj2.nome)
       console.log('Objeto 3 é:',obj3.nome)
       

