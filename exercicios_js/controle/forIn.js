const pessoa = {
    nome: 'ana',
    sobrenome: 'silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}