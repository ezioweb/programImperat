




const alice = [23, 8, 46];
const bob = [45, 8, 80];

function compararPontos (a, b) {
    let pontosA = 0;
    let pontosB = 0;
    for (let i = 0; i < a.length; i++){
        if (a[i] > b[i]) {
            pontosA ++;
        }
    else if (a[i] < b[i]) {
        pontosB ++;
    }
    else continue;
    }
    /* console.log(pontosA, pontosB) */
    console.log(pontosA == pontosB ? 'Empate!' : pontosA > pontosB ? 'Jogador A ganhou' : 'Jogador B ganhou')    
}
compararPontos(alice, bob)

