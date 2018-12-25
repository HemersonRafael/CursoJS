//usando a notação literal
const obj1 ={}

//Objeto em JS

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//FUnções construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new  Produto('caneta', 7.99, 0.15)
const p2 = new  Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSlario(){
            return (salarioBase/30)*(30 - faltas)
        }
    }
}

const f1 = criarFuncionario('joão', 7980,4)
const f2 = criarFuncionario('Maria', 11400,1)
console.log(f1.getSlario(), f2.getSlario())
//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função famosa que retorn Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)