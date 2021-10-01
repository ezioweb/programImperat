let contaBancaria = {
    numConta: 1234567890,
    tipoConta: "Conta Corrente",//1 é Conta Corrente e 2 Conta Poupança
    saldo: 0.0,//decimal number
    titConta: "Nome Sobrenome",
}

console.log(`Núm Conta: ${contaBancaria.numConta}`, contaBancaria.tipoConta, contaBancaria.saldo, contaBancaria.titConta)

function ContaBancaria(mConta,mTipoConta,mSaldo,mTitular) {
    this.conta = mConta;
    this.tipoConta = mTipoConta;
    this.saldo = mSaldo;
    this.titular = mTitular;
}

let conta1 = new ContaBancaria(5486273622,'Conta Corrente',500,'Abigael Natte');
let conta2 = new ContaBancaria(1183971869,'Conta Poupança',500,'Ramon Connell');
let conta3 = new ContaBancaria(9582019689,'Conta Poupança',500,'Jarret Lafuente');
let conta4 = new ContaBancaria(1761924656,'Conta Poupança',500,'Ansel Ardley');
let conta5 = new ContaBancaria(7401971607,'Conta Poupança',500,'Jacki Shurmer');
let conta6 = new ContaBancaria(630841470,'Conta Corrente',500,'Jobi Mawtus');
let conta7 = new ContaBancaria(4223508636,'Conta Corrente',500,'Thomasin Latour');
let conta8 = new ContaBancaria(185979521,'Conta Poupança',500,'Lonnie Verheijden');
let conta9 = new ContaBancaria(3151956165,'Conta Corrente',500,'Alonso Wannan');
let conta10 = new ContaBancaria(2138105881,'Conta Poupança',500,'Bendite Huggett');

let lista = [conta1,conta2,conta3,conta4,conta4,conta5,conta5,conta6,conta7,conta8,conta9,conta10];


let banco = {
    clientes:lista,
    consultarCliente:function(nome){
        for(let i= 0;i<this.clientes.length;i++){
            let cliente = this.clientes[i];
            if(cliente.titular == nome){
                console.log(cliente)
                return cliente;
            }
        }
    }
}

/* depositar:function(nome,valor){
    let cliente = this.consultarCliente(nome);
        cliente.saldo += valor;
} */
module.exports = banco;