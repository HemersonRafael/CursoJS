console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('dentro da função')
    console.log(this === global)
    console.log(this === module)

    console.log(this === module.exports)
    console.log(this === exports)
    //this.perigo = 'perigo' // dentro de uma uam isso é escopor global
}
//this.perigo = 'perigo'// dentro do escorpo do modulo
logThis()

