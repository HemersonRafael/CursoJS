//pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'

console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana}

Object.freeze(pessoa) 

pessoa.nome = "maria"
pessoa.end = 'rua abc'
delete pessoa.nome
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'rafael'})
console.log(pessoaConstante)




