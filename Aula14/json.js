let pessoa = {
    nome: "Ezio",
    idade: 21,
    altura: 1.64
}

let json = JSON.stringify(pessoa);

console.log(json)

let objetoDeNovo = JSON.parse(json);

console.log(objetoDeNovo)

