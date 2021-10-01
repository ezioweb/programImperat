const imprimir = resultado => {
    console.log(resultado)
}

const soma = function(x,y,callback){
    const soma = x + y;
    callback (soma)
}

soma(5, 6, imprimir)

