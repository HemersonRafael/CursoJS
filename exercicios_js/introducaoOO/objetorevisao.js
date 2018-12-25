//coleção dinâmica de pares chaves/valor
const produto = new Object

produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220
console.log(produto)
delete produto.preco
delete produto['marca do produto']

console.log(produto)

const carro ={
    modelo: 'a4',
    valor: 89000,
    proprietario:{
        nome: 'rafael',
        idade: 23,
        endereco:{
            rua: 'rua da caapeba',
            numero: 0913
        }
    },
    condutores:[{
        nome: 'junior',
        idade: 19
    },{
        nome: 'hemerson',
        idade: 35
    }]
}
console.log(carro)
carro.proprietario.endereco.numero = 10
carro['proprietario']['endereco']['rua'] = 'abc'
console.log(carro)