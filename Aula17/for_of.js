//Array
let numeros = [1,2,3,4,5,6];

// método de percorrer os valores por adição
for (let i=0; i < numeros.length; i++){
    const numero = numeros [i];
    //console.log(numero)
}

//pode ser substituido pela forma simplificada:

for (let numero of numeros){
    //console.log(numero)
}

/* for (let numero of numeros.reverse()){
    console.log(numero)
} */
 
//declaração de função
function minhafuncao (a,b,c,d){

}
//Invocar uma função
minhafuncao(3,4,5,6)

//forEach (funciona igual ao fot of)
// nessas funções (callback) o primeiro atributo é o elemento (ou valor) e o segundo o índice (ou posição)

numeros.forEach(function(elemento,indice,array) {
    console.log("Elemento: " + elemento + " Indice " + indice + " Array= " + array)
   });

   
