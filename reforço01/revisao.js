let meuObjeto = {

    numeros:[1,2,3,4],
    prop2:2
    prop3:"3"
    func1:function(){
        const concat = this.prop2 + this.prop3;
        let soma = 0;
        for(let prop of this.numeros){
            console.log(prop);
            soma = soma + prop;
        }
    },
    func2:function(){

    }
}

function MeuObjeto(numeros_,prop2_,prop3_){
    this.numeros = numeros_;
    this,prop2 = prop2_
    this.prop3 = prop3_
}