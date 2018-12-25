class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('João')
p1.falar()

function Pessoas(nome){
    this.nome = nome
    this.getNome = ()=> console.log(`Meu nome é ${nome}`)
}
const p2 = new Pessoas('João')
p2.getNome()