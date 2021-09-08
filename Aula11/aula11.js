/* Participantes Grupo #7 
Elivelton A. Viveiro
Ezio Roberto Lorenzetti
Fabiana Kayanoki
Gustavo Brock
Marcos Araújo 
*/

/* converterArrayParaMaisculo(arrTexto); */

let filmes = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];
let anima = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

function somaFilmes(filmes,anima) {
    for(let j = 0; j < anima.length; j++){
        filmes[j] = filmes[j].toUpperCase();
        filmes.push(anima[j].toUpperCase());
    }
    console.log("\n" + filmes + "\n"); /* imprime filmes + animações converte para maiúsculas */

    let game = filmes.pop(); /* salva game em outra variável */
    console.log(game + "\n")
    filmes.pop();
    console.log(filmes + "\n"); /* imprime filmes + animações - game */
      
}
somaFilmes(filmes,anima) 

/* compara scores */

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 
let compara = [];


for (let k = 0; k < asiaScores.length; k++){
compara[k] = asiaScores[k] === euroScores[k];
}
console.log(asiaScores + "\n");
console.log(euroScores + "\n");
console.log(compara + "\n");

/* Bonus - Concurso */

/* Vencedor pela média */

const participanteA = [5, 8, 4, 9, 5];
const participanteB = [8, 7, 8, 6, 8];
const participanteC = [7, 5, 10, 8, 3];

let totalA = 0
    for (let m = 0; m < participanteA.length; m++) {
    totalA += participanteA[m];
}
let mediaA = totalA / participanteA.length;
console.log("A média do Participante A é " + mediaA)

let totalB = 0
    for (let n = 0; n < participanteB.length; n++) {
    totalB += participanteB[n];
}
let mediaB = totalB / participanteB.length;
console.log("A média do Participante B é " + mediaB)

let totalC = 0
    for (let p = 0; p < participanteC.length; p++) {
    totalC += participanteC[p];
}
let mediaC = totalC / participanteC.length;
console.log("A média do Participante C é " + mediaC)

if (mediaA > mediaB && mediaA > mediaC){
    console.log("O Participante A tem a maior média \n")
}

else if (mediaB > mediaA && mediaB > mediaC){
    console.log("O Participante B tem a maior média \n")
}
else {
    console.log("O Participante C tem a maior média \n")
}

/* Vencedor pela maior nota */

let notaA= participanteA;
let maiorA = Math.max.apply(null, notaA);
console.log("Maior nota do Participante A = " + maiorA)

let notaB= participanteB;
let maiorB = Math.max.apply(null, notaB);
console.log("Maior nota do Participante B = " + maiorB)

let notaC= participanteC;
let maiorC = Math.max.apply(null, notaC);
console.log("Maior nota do Participante C = " + maiorC)

if (maiorA > maiorB && maiorA > maiorC){
    console.log("O Participante A tem a maior nota (e-tip)" + "\n")
}

else if (maiorB > maiorA && maiorB > maiorC){
    console.log("O Participante B tem a maior nota (e-tip)" + "\n")
}
else {
    console.log("O Participante C tem a maior nota (e-tip)" + "\n")
}


const a = [5, 8, 4, 9, 5];
const b = [8, 7, 8, 6, 8];
const c = [7, 5, 10, 8, 3];
/*
function maior(array) {
    let maior = 0
    for(let i=0;i<array.length;i++){
        if(array[i]>maior{
            maior = array[i]};
            }
            return maior;
}
    
console.log(maior(a)) */


function maior(array) {
    let maior = array[0];
    for(let i = 1;i<array.length;i++){
  
      if(array[i] > maior){
        maior = array[i];
      }
  
    }
    return maior;
  }
  
  function competicao(a,b,c){
    let mediaA = media(a);
    let maiorA = maior(a);
  
    let mediaB = media(b);
    let maiorB = maior(b);
  
    let mediaC = media(c);
    let maiorC = maior(c);
  
    if(mediaA > mediaB && mediaA > mediaC){
      console.log("Na categoria média o vencedor foi o participante A");
    } else if (mediaB > mediaA && mediaB > mediaC){
      console.log("Na categoria média o vencedor foi o participante B");
    } else if (mediaC > mediaA && mediaC > mediaB){
      console.log("Na categoria média o vencedor foi o participante C");
    } else {
      console.log("Não teve vencedor na media");
    }
  
    if(maiorA > maiorB && maiorA > maiorC){
      console.log("Na categoria maior o vencedor foi o participante A");
    } else if (maiorB > maiorA && maiorB > maiorC){
      console.log("Na categoria maior o vencedor foi o participante B");
    } else if (maiorC > maiorA && maiorC > maiorB){
      console.log("Na categoria maior o vencedor foi o participante C");
    } else {
      console.log("Não teve vencedor no e-tip");
    }
  
  }
  
  competicao(a,a,a);