// Prática guiada com FUNÇÕES

console.log(`buenas noches, easley <3`)

// Função tradicional
function darOlaPessoa(nome){
    const frase = `Olá, ${nome}!`
    console.log(frase)
}

/*darOlaPessoa('Marcela')
darOlaPessoa('Alex')
darOlaPessoa('Carol')*/

// Função não-nomeada
const darOlaPessoaExtra = function(nome){
    const frase = `Olá, ${nome}!`
    console.log(frase)
}

/*darOlaPessoaExtra('Marcela')
darOlaPessoaExtra('Alex')
darOlaPessoaExtra('Carol')*/

// PRÁTICA I
function operarNumero(numero){
    //verifica paridade
    const par = numero % 2 === 0
    //soma com 10
    const soma = numero + 10
    //multiplica por ele mesmo
    const multiplicacao = numero ** 2

    const frase = `O número ${numero} é par? ${par}. Somado com 10, o resultado é ${soma}. Multiplicado por ele mesmo o resultado é ${multiplicacao}.`

    return frase
}

console.log(operarNumero(4))
console.log(operarNumero(2))
console.log(operarNumero(5))

const operarNumeroExtra = function(numero){
    const par = numero % 2 === 0
    const soma = numero + 10
    const multiplicacao = numero ** 2

    const frase = `O número ${numero} é par? ${par}. Somado com 10, o resultado é ${soma}. Multiplicado por ele mesmo o resultado é ${multiplicacao}.`

    return frase
}

// Conceito de escopo local: undefined
// console.log(soma) Não consegue acessar a soma

/*console.log(operarNumeroExtra(4))
console.log(operarNumeroExtra(2))
console.log(operarNumeroExtra(5))*/

// PRÁTICA II
function verificarLoginESenha(login,senha) {
    const loginArmazenado = 'marcela-celani'
    const senhaArmazenada = '123abc'

    // verifica se login/Senha é igual
    // se forem iguais, resultado TRUE, senão, FALSE
    const comparaLogin = login === loginArmazenado
    const comparaSenha = senha === senhaArmazenada

    // verifica infos
    const verificaInfos = comparaLogin && comparaSenha

    // frase retorno
    const frase = `As informações de login estão corretas? ${verificaInfos}`

    return frase
}

/*console.log(verificarLoginESenha('marcela-celani', '123abc'))
console.log(verificarLoginESenha('marcela-celani', '123abcd'))
console.log(verificarLoginESenha('marcela_celani', '123abc'))*/