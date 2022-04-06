'use strict'

const { Sign } = require("crypto");

// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.
function Node(data, next){//creacion de cada elemento de la lista// si pero no se como ponerlo en mi teclado no sale
  this.value = data;//información
  this.next = next||null;//siguiente posición
}

function LinkedList() {//lista
   this.head = null; // primera posición
   this.length = 0;
}

LinkedList.prototype.add = function(data){//agregar a la lista
    const newNode = new Node(data, null);

    if(!this.head) this.head = newNode

    else {
      let current = this.head;
      while(current.next){
        current = current.next;
      };
      current.next = newNode;
      this.aglargo;
    };


  };

  LinkedList.prototype.retlargo = function(){
    return this.length;
  }
  LinkedList.prototype.aglargo = function(){
    return this.length++;
  }
  LinkedList.prototype.dismlargo = function(){
    return this.length--;
  }

  LinkedList.prototype.remove = function(){//agregar a la lista
    let current = this.head;
    let eliminado
    if(!current) return null;
    else if(!current.next){
      eliminado = current.value;
      this.head=null;
      this.dismlargo;
      return eliminado;
    }

    while (current.next.next) {
      current = current.next;
    }
      eliminado = current.next.value;
      current.next = null;
      this.dismlargo;
      return eliminado;
  };




LinkedList.prototype.search = function(data){
  let current = this.head //empezamos en la cabecera,
  if (!current){//Si no hay elementos
    console.log('La lista esta vacía!!');
    return null
  }
    while (current){//Mientras que haya elementos
      if(current.value ===data){
        return current.value;
      }else if(typeof data === "function"){
        if (data(current.value)) return current.value;
      }
      current = current.next;
    }

      return null;
    };





// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable(){
  this.buckets = [];
  this.numBuckets = 35;
}

HashTable.prototype.hash = function(string){
  if (typeof string != "string"){
    console.log ("Debe ingresar un string")
  }
    let sum = 0;
    for(let i =0; i< string.length; i++){
      sum += string.charCodeAt(i);
    }
    return sum % this.numBuckets;
};



  HashTable.prototype.set = function(key,value){
    if(typeof key !== "string") throw new TypeError("Keys must be strings");
    let index = this.hash(key);    
    if(!this.buckets[index]){
       this.buckets[index]={};
    }  
    this.buckets[index][key]= value;
    };

HashTable.prototype.get= function(key){
  let index = this.hash(key);
  return this.buckets[index][key]
 }

 
let hash = new HashTable();

console.log(hash.hash("sofia"));
console.log(hash.hash("Johanna"))
console.log(hash.set('Johanna',"Johanna"))
console.log(hash.buckets[3]["Johanna"])
console.log(hash.buckets[3])
console.log(hash.get("Johanna"))



HashTable.prototype.hasKey = function(key){
  let index = this.hash(key);
  return this.buckets[index].hasOwnProperty(key);
};

//



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
