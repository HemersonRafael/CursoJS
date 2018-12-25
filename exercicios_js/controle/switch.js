const imprimrirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10: case 9:
            console.log('Quadro de hora')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Rprovado')
            break
        default:
        console.log('Nota inválida')
        break
    }
}

imprimrirResultado(10)
imprimrirResultado(8)
imprimrirResultado(6)
imprimrirResultado(3)
imprimrirResultado(100)