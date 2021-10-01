let numeros = [1, 2, 3, 4, 5, 6];
let letras = ['a', 'b', 'c', 'd', 'e','f'];

let numerosDobro = numeros.map(elemento => elemento*2);
//console.log(numerosDobro)

let letrasUpper = letras.map(palavra=>palavra.toUpperCase());
//console.log(letrasUpper)

let concatenacao = numeros.reduce(function(acumulador,elemento){
    return acumulador + ' - ' + elemento
});

// console.log(concatenacao)

let cumulo = numeros.reduce(function(acumulador,elemento,indice){
    console.log('acumulador ' + acumulador + ', elemento: ' + elemento + ', indice: ' + indice)
    return acumulador + elemento
});

console.log(cumulo)