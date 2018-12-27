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

const criarPessoa = nome => {
    return{
    falar: () => console.log(`meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Rafel')
p2.falar()