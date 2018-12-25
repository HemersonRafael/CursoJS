const fabricante = ['mercedes', 'audio', 'bmw']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}
//para cada elemento encontrado ele chama a função imprimir
fabricante.forEach(imprimir)

fabricante.forEach(function(fabricante){
    console.log(fabricante)
})

fabricante.forEach(fabricante =>  console.log(fabricante)
)