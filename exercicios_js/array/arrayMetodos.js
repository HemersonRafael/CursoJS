const pilotos = ['vettel', 'alonso', 'Raikkonen', 'massa' ]
pilotos.pop() // remove o ultimo
console.log(pilotos)

pilotos.push('verstappen')
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//adicionar
pilotos.splice(2, 0, 'Bottas', 'massa')
console.log(pilotos)

///remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.splice(2)
console.log(algunsPilotos)

