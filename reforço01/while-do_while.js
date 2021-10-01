/*
Exemplo: o While verifica se a condição é verdadeira e segue até ser falsa
let email = input ()

while (email != "***@***.com"){
    email = input()
}
 */

let i=0;
while (i <= 10) {
    console.log(i);
    i = i +1;
}

/* Loop While */

let volta = 1
while (volta <= 10) {
    console.log("Volta número " + volta)
    volta ++
}

/* Do / While - Faz a repetição pelo menos 1 vez, mesmo que retorne false */
let roda = 5
do {
    console.log("Volta número " + roda)
    roda ++
} while (roda <= 5) 