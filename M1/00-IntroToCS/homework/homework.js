'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  function binarioADecimal(binario){
    let sum = 0;

    for (let i=0; i< binario.length; i++){
        sum += binario[i]*2**(binario.length -1 -i);
    }
    return sum;    
}
}

function DecimalABinario(num) {
  function decimalABinario(decimal){

    let Vdecimal = [];

    while(decimal>1) {
        Vdecimal.unshift(decimal%2);
        decimal = Math.floor(decimal/2);

    }
    Vdecimal.unshift(decimal);
    return Vdecimal;

    }
   

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}