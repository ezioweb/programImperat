
/* For alternativo mais simples:

let lista = ["a", "b", "c", "d"]

for (char of lista){
    console.log(char)
} */

/* 16. Escreva um programa para gerar o
 invertido de um número com três algarismos 
 (exemplo: o invertido de 498 é 894). */

 /* String */
 let num = "498"; /* para poder inverter, não pode ser um número, tem que ser uma string */
 let numInvertido = "";

 for (let i = num.length - 1; i >= 0; i = i -1){
     numInvertido = numInvertido + num[i];
    console.log(numInvertido);
 }

 /* Array */
 invert([6,7,8,9]);
 function invert(param1){
    let troca = []
    for (let i = param1.length -1; i >= 0 ; i--) {
          troca.push(param1[i]) //push - adiciona mais 1 elemento no array         
    } 
    console.log(troca);
    return troca; //tira a variável para fora da função {}
}; 

let retorno = invert([6,7,8,9]);
console.log(retorno)




