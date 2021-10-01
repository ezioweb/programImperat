/* function factorial (n){
    var res = 1;
    for(var i=n; i>=1; i--){
      res = res * i;
          }
          return console.log(res);
      }
      factorial(6) */
      
 

const fatorial = (n) =>{
   
    if (n<=1) return 1;
    return n * factorial(n-1);
    
    
} 
console.log(factorial(5));


