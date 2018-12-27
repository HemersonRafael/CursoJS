const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}
axios.get(url).then(response =>{
    const funcionarios = response.data
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

    console.log(func)
})
/* minha solução
axios.get(url).then(response =>{
    const funcionarios = response.data
    //console.log(funcionarios)
    //const getFuncionario = (funcionario) => funcionario.pais
    //const getGenero = (funcionario) => funcionario.genero
    const getFuncionariosDaChina = (funcionario) => funcionario.pais === 'China'
    const getFuncionariosDoGeneroF = (funcionario) => funcionario.genero === 'F'
    const funcionariosDaChina = funcionarios.filter(getFuncionariosDaChina)
    const funcionariosDoGeneroF = funcionariosDaChina.filter(getFuncionariosDoGeneroF)
    //console.log(funcionariosDoGeneroF)
    const getSalario = (funcionario) => funcionario.salario
    const getMenor = (menor, atual) => {
        if(atual < menor){
            return atual
        }else {
            return menor
        }
    }
    const menorSalario = funcionariosDoGeneroF.map(getSalario).reduce(getMenor)
    console.log(menorSalario)
    const getMenorSalario = (funcionario) => funcionario.salario === menorSalario
    const funcionarioComOMenorSalario = funcionariosDoGeneroF.filter(getMenorSalario)
    console.log(funcionarioComOMenorSalario)
})
*/
