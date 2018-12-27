class Lancamento{
    constructor(nome = 'Genérico', valor =0){
        this.nome = nome
        this.valor = valor
    }
}

class CircloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    // ... é um operador que coloca os paramentros na função em um array
    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l =>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CircloFinanceiro(6, 2018)

contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())
