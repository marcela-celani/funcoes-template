// Resolva o Exercício de Fixação!

function receberDados(nome, anoNascimento, anoAtual){
    const idade = anoAtual - anoNascimento >= 18
    const frase = `${nome} é maior de idade? ${idade}`

    return frase
}



const nomeDaPessoa = prompt('Qual o seu nome?')
const anoDeNascimentoDaPessoa = prompt('Qual o ano do seu nascimento?')
const anoAtual = prompt('Qual o ano atual?')

console.log(receberDados(nomeDaPessoa, anoDeNascimentoDaPessoa, anoAtual))
