const sequencia = {
    _valor: 1, //convenção (ideia de privado)
    get valor(){return this._valor++},
    set valor(valor){
        if(valor > this.valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 100
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 90
console.log(sequencia.valor, sequencia.valor)

