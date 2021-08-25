/* Grupo Sala 01

Allan Cardoso
Ezio Roberto Lorenzetti 
Gabriella Gomes de Lima
Lucas Alcântara
Lucas Mota Barbosa da Silva
*/

/*  1 - Pipoca – 10 segundos (padrão);
    2 - Macarrão – 8 segundos (padrão);
    3 - Carne – 15 segundos (padrão);
    4 - Feijão – 12 segundos (padrão);
    5 - Brigadeiro – 8 segundos (padrão);  */

function microOndas (prato, tempo){
    let tempoDoPrato = tempo
    switch (prato){
        case 1:  //pipoca 10 seg.
        if (tempoDoPrato < 10){
            console.log("Tempo insuficiente");
        }
        else if (tempoDoPrato >= 20 && tempoDoPrato < 30){
            console.log("Prato queimou");
        }
        else if(tempoDoPrato >= 30){
            console.log("Kabumm");
        }
        else {
            console.log("Prato Pronto");
        }
        break;


        case 2:  //Macarrão 8 seg.
        if (tempoDoPrato < 8){
            console.log("Tempo insuficiente");
        }
        else if (tempoDoPrato >= 16 && tempoDoPrato < 24){
            console.log("Prato queimou");
        }
        else if(tempoDoPrato >= 24){
            console.log("Kabumm");
        }
        else {
            console.log("Prato Pronto");
        }
        break;


        case 3:  //carne 15 seg.
        if (tempoDoPrato < 15){
            console.log("Tempo insuficiente");
        }
        else if (tempoDoPrato >= 30 && tempoDoPrato < 45){
            console.log("Prato queimou");
        }
        else if(tempoDoPrato >= 45){
            console.log("Kabumm");
        }
        else {
            console.log("Prato Pronto");
        }
        break;


        case 4:  //Feijão 12 seg.
        if (tempoDoPrato < 12){
            console.log("Tempo insuficiente");
        }
        else if (tempoDoPrato >= 24 && tempoDoPrato < 36){
            console.log("Prato queimou");
        }
        else if(tempoDoPrato >= 36){
            console.log("Kabumm");
        }
        else {
            console.log("Prato Pronto");
        }
        break;


        case 5:  //Brigadeiro 8 seg.
        if (tempoDoPrato < 8){
            console.log("Tempo insuficiente");
        }
        else if (tempoDoPrato >= 16 && tempoDoPrato < 24){
            console.log("Prato queimou");
        }
        else if(tempoDoPrato >= 24){
            console.log("Kabumm");
        }
        else {
            console.log("Prato Pronto");
        }
        break;

        default: 
            console.log("Prato imexistente")
        }
}


microOndas (5, 24)
