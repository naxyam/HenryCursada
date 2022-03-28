'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  
    let sum = 0;

    for (let i=0; i< num.length; i++){
        sum += num[i]*2**(num.length -1 -i);
    }
    return sum    
}


function DecimalABinario(num) {
  

    let Vdecimal = [];

    while(num>1) {
        Vdecimal.unshift(num%2);
        num = Math.floor(num/2);

    }
    Vdecimal.unshift(num);
      let decimal =""
       decimal =  Vdecimal.join("");
      return decimal;

    }
   




module.exports = {
  BinarioADecimal,
  DecimalABinario,
}