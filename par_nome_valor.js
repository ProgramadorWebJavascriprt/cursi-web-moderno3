console.log('curso de javascript web moderno/fundamentos:Par Nome/Valor') //segunda-feira,03/05/2021;21:26:00 h +|-
const saudacao = 'Opa' // contexto léxico
// par nome/valor
function exec() {
    const saudacao = 'Falaaa' // contexto léxico 02
        return saudacao
}
// Objetos{São grupos aninhados de pares nome/valor}
const cliente = {
    nome: 'Pedro',
        idade: 32,
            peso:90,
                endereco: {
                    logradouro: 'Rua muito Legal',
                        numero:123
                }
}
console.log(saudacao)
    console.log(exec())
        console.log(cliente)
        