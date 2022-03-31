'use strict'

function BinarioADecimal(num) {
 
  
  let sum = 0;
  
  for (let i=0; i< num.length; i++){
      sum += num[i]*2**(num.length -1 -i);
    }
    return sum    
}
let decimal = BinarioADecimal('1001');
console.log(decimal);


function DecimalABinario(num) {
  

    let Vdecimal = [];

    while(num>0) {
        Vdecimal.unshift(num%2);
        num = Math.floor(num/2);

    }
    Vdecimal.unshift(num);
      let decimal ="";
       decimal =  Vdecimal.join("");
      return decimal;

    }

    console.log(DecimalABinario(15));
   




module.exports = {
  BinarioADecimal,
  DecimalABinario,
}