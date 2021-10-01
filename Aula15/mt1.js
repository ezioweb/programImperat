const fB = (param1,param2,palavra1,palavra2) =>{
    for (let i=1 ; i<=100 ;i++){
        if(param1 % i == 0 && param2 % i == 0) {
            console.log(palavra1+palavra2)
                        
        } else if(param2 % i == 0) {
            console.log(palavra2)
            
        } else if( param1 % i == 0 ) {
        console.log(palavra1)
        }else (console.log(i))
      
    }
}



fB(95, 80, 'div 1 ', 'div 2 ')
//read line sinc, entrar palavras do usuário

    


