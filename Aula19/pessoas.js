function Pessoa(_altura,_sexo,_nome){
this.altura = _altura
this.sexo = _sexo
this.nome = _nome
}

//const pessoa1 = new Pessoa(1.80,'M', 'Pessoa M 1');
//const pessoa2 = new Pessoa(1.70,'F', 'Pessoa F 1');
//const pessoa3 = new Pessoa(1.60,'M', 'Pessoa M 2');
//const pessoa4 = new Pessoa(1.930,'M', 'Pessoa M 3');
//const pessoa5 = new Pessoa(1.75,'F', 'Pessoa F 2');

//const pessoas = [pessoa1,pessoa2,pessoa3,pessoa4,pessoa5];

let pessoas = []
for(let i = 1;i<100;i++){
    let numeroAleatório = Math.random() + 1;
    let altura = numeroAleatório;
    let sexo = altura < 1.5 ? "F" : "M";
    let nome = 'Pessoa ' + i;
    const pessoa = new Pessoa(altura,sexo,nome);
    pessoas.push(pessoa);
}


module.exports = {
    pessoas:pessoas,
  maiorEMenorAltura:function(){
   let pessoasOrdenadas =  this.pessoas.sort(function(primeiraPessoa,segundaPessoa){
        return segundaPessoa.altura - primeiraPessoa.altura;
        // .sort (a,b) a-b = do menor para o menor e b-a = do maior para menor (unicode)
    });
    let maior = pessoasOrdenadas[0];
    let menor = pessoasOrdenadas[pessoasOrdenadas.length - 1];
       
    /* let primeiro = this.pessoas[0];

    let maior = primeiro;
    let menor = primeiro;

    let alturaMaior = primeiroAltura  
    let alturaMenor = primeiroAltura      
    
    for(let pessoa of this.pessoas){
        if(pessoa.altura > alturaMaior){
            alturaMaior = pessoa.altura;
            maior = pessoa;
        }
        if(pessoa.altura < alturaMenor){
            alturaMenor = pessoa.altura;
            maior = pessoa;
    } */
    console.log(maior)
    console.log(menor)
    //console.log(pessoasOrdenadas)
  },


mediaMulheres:function(){
    let qtdMulheres = 0;
    let somaAlturaMulheres = 0;

    for(let pessoa of this.pessoas){
        if(pessoa.sexo === 'F'){
            qtdMulheres++;
            somaAlturaMulheres += pessoa.altura;
        }
        console.log(somaAlturaMulheres/qtdMulheres)
    }
},

qtdHomens:function(){
    let qtd = 0;
    for(let pessoa of this.pessoas){
        if(pessoa.sexo === 'M'){
            qtd++ ;
            }        
    }
    console.log(qtd)
}

}

//const pessoa1 = new Pessoa(1.80,'M', 'Pessoa M 1');
//const pessoa2 = new Pessoa(1.70,'F', 'Pessoa F 1');
//const pessoa3 = new Pessoa(1.60,'M', 'Pessoa M 2');
//const pessoa4 = new Pessoa(1.930,'M', 'Pessoa M 3');
//const pessoa5 = new Pessoa(1.75,'F', 'Pessoa F 2');

