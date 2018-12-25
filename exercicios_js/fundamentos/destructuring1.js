// novo recurso de ES2015
const pessoa ={
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'rua abc',
        numero: 1000
    }
}

const {nome, idade} = pessoa //extraindo nome idade de pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n,i)

const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)
const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)
