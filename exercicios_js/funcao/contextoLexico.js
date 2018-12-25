const valor = 'Global'
//a função carregar o seu contexto (estar no escopor léxico no caso local de definição neste caso global)
function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()