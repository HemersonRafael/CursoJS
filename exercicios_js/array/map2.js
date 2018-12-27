const carrinho =[
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "kit de lapis", "preco": 41.22}',
    '{"nome": "caneta", "preco": 7.50}'
]
// retornar um array apenas com os preços
const resultado = carrinho.map(function(e){
    aux = JSON.parse(e)
    return aux.preco

})
console.log(resultado)