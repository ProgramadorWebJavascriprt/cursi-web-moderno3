console.log('curso de javascript web moderno/fundamentos:Tratamento de Erro [Try/Catch/Throw];') //segunda-feira,10/05/2021;19:30:00 h +|-
function tratarErroElancar(erro) {
    // throw new Error
     // throw 10
     throw {
         nome: erro.name,
          msg: erro.message,
          date: new Date
     }

    }
    function imprimirNomeGritado(obj) {
        try{
            console.log(obj.name.toUpperCase()) + '!!!'
        } catch (e) {
            tratarErroElancar(e)
        } finally {
            console.log('Final')
        }
    }
    const obj = {nome: 'Roberto'}
       imprimirNomeGritado(obj)