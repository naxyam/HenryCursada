// ### Repeatify

// Crear un método `repeatify` que este disponible para _todos_ los objetos `Strings`. Esta función debe aceptar un `entero` que indica cuantas veces el string tiene que repetirse. La función retorna el string repetido el número de veces que indicamos. Controlar que el número no sea menor que cero, y si es cero que devuelva `''` (String vacío).

// ```javascript
// console.log('hola'.repeatify(3));   //holaholahola

String.prototype.repeatify = function(num){
    let repeat = this;
    if (num<=0){
        return repeat;
    }
    else{
        for (let i = 1; i< num; i++){
            repeat = repeat + this;

        }
    }
    return repeat;
}

console.log("hola ".repeatify(3))