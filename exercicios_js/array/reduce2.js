const alunos = [
    {nome: 'joão',  nota: 7.3, bolsita: false},
    {nome: 'maria',  nota: 9.2, bolsita: true},
    {nome: 'pedro',  nota: 9.8, bolsita: false},
    {nome: 'joão',  nota: 8.7, bolsita: true},
]

//desafio 1: todos os alunos são bolsitas?
const todosBolsitas = (resultado,bolsita) => resultado && bolsista
console.log(alunos.map(a => a.bolsita).reduce(todosBolsitas))

///desafio 2: algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista

console.log(alunos.map(a => a.bolsita).reduce(algumBolsista))
