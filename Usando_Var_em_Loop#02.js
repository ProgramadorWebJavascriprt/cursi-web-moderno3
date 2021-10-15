console.log('curso de javascript web moderno/fundamentos:Usando Var em Loop #02') //sábado,01/05/2021;10:30:30 h +|-
const funcs =[]
  for (var i = 0;i < 10; i++) {//O Var não tem escopo de função;
       funcs.push(function(){
           console.log('O valor de "i"{dentro} é =',i)
       })
  }
       funcs[2]()
       funcs[8]()
