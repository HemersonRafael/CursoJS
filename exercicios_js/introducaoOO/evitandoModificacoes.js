// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'borracha escolar branca'
delete produto.tag

console.log(produto)

// Object.seal
const pessoa = {nome: 'juliana', idade: 35}
Object.seal(pessoa)
console.log('selado:', Object.isSealed(pessoa))
pessoa.sobrenome = "silva"
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + variaveis constante