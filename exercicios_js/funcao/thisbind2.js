function Pessoa(){
    this.idade = 0
    const self = this /// forma de evitar a variação do this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/,1000)
}

new Pessoa

