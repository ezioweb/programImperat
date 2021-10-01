function Pessoa(_altura,_sexo,_nome,_idade,_opiniao){
    this.altura = _altura
    this.sexo = _sexo
    this.nome = _nome
    this.idade = _idade
    this.opiniao = _opiniao
    }

let pessoas = []
for(let i = 1;i<=15;i++){
    let numeroAleatório = Math.random();
    let altura = numeroAleatório + 1;
    altura = Number(altura.toFixed(2));
    let sexo = altura < 1.5 ? "F" : "M";
    let nome = 'Pessoa ' + i;
    let opiniao = numeroAleatório<0.33 ? "1" : numeroAleatório > 0.33 && numeroAleatório < 0.66 ? "2" : "3";
    let idade = ((100 - 12)*numeroAleatório + 12); //refazer
    idade = Number(idade.toFixed(0));
    const pessoa = new Pessoa(altura,sexo,nome,idade,opiniao);
    pessoas.push(pessoa);
    //console.log('Nome: ' + nome + ' altura: ' + altura )
    console.log(pessoas)
}

let mediaDaIdadePessoasOtimo = function(){
    let contadorOtimo = 0;
    let somaDasIdades = 0;

    for(let pessoa of pessoas){
        if(pessoa.opiniao == "3"){
            contadorOtimo = contadorOtimo + 1;
            somaDasIdades += pessoa.idade;
        }
    }
    const media = somaDasIdades/contadorOtimo;
    console.log(media);
}

/* a média das idades das pessoas que responderam ótimo; */


//mediaDaIdadePessoasOtimo();

/* a quantidade de pessoas que responderam regular; */

let mediaDaIdadePessoasReg = function(){
    let contadorReg = 0;
  

    for(let pessoa of pessoas){
        if(pessoa.opiniao == "2"){
            contadorReg = contadorReg + 1;
             }
    }
     console.log(contadorReg);
     console.log(pessoas.length)
}

/* a média das idades das pessoas que responderam ótimo; */
mediaDaIdadePessoasReg();




/* a porcentagem de pessoas que responderam bom entre todos os espectadores analisados. */




