Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim

}

const imprimiresultado = function (nota){
    if(nota.entre(9,10)){
        console.log('Quaro de Honra')
    }else if(nota.entre(7, 8.99)){
        console.log('aprovado')
    }else if(nota.entre(4)){

    }
}