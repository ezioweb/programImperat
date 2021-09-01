let exemploArray = ["Texto01", "Texto02"]
let array2 = "Texto01 Texto02"

/* 
A. Acessar elementos específicos de um array. */

console.log(exemploArray.indexOf("Texto02"))

/* B. Modificar cada um dos elementos de um array e imprimi-los no console. */

exemploArray[0] = "Ok"
console.log(exemploArray)

array2.replace("Texto02", "Ok")
console.log(array2)

/*
C. Adicionar elementos a um array. */

exemploArray.push("Texto03")
console.log(exemploArray)


/* D. Extrair elementos de um array. */

exemploArray.pop()
console.log(exemploArray)


/* E. Comparar elementos de um array com os elementos de outro. */

if (exemploArray[0] === array2) {
    console.log("Elemento igual")
}
else {
    console.log()
}

console.log(exemploArray[0] === array2[0] ? "Igual":"Diferente")


/* O que esses códigos retornam?
Neste exercício, você terá que pensar sobre o que esses códigos retornam sem testá-lo no console.
let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])

Undefined


let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0])

Spiderman


let str = “una string qualquer”
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1]) 

una string qualquer */