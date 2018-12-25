//Função  em JS é first-class object
//higher-order function

//criar de forma literal
function fun1(){

}

//Armazenar em uma variável
const fun2 = function(){}

//Armazenar em um array
const array = [function(a,b){ return a +b}, fun1, fun2]

console.log(array[0](2,3))

//Amazenar em um atributo de objeto
const obj = {}

obj.falar = function(){return 'Opa'}

//passa função como param
function run(fun){
    fun()
}
run(function(){console.log('Executando...')})

//um função pode retornar/conter um função
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)

const cincoMais = soma(2,3)
cincoMais(4)