"use strict";
// No cambies los nombres de las funciones.

// function factorear(num) {
//   // Factorear el número recibido como parámetro y devolver en un array
//   // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
//   // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
//   // Tu código:
//    let factores =[1];
//     for (let i = 2; num!==1;){
//       if(num%i == 0){
//       factores.push(i);
//       num=num/i
//       factorear(num)
//     }else{
//       i++;
//     }

//   }

//   return factores;

// }
// console.log(factorear(180))
function factorear(num) {
  let arr = [1];
  let div = 2;
  while (num !== 1) {
    if (num % div === 0) {
      arr.push(div);
      num = num / div;
    } else div++;
  }
  return arr;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // // el array recibido como parámetro
  // // Devolver el array ordenado resultante
  // // Tu código:
  let len = array.length;
  let checked;
  let tmp;
  do {
    checked = false;
    for (let i = 0; i < len; i++) {
      if (array[i] > array[i + 1]) {
        tmp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmp;
        checked = true;
      }
    }
  } while (checked);
  return array;
}

console.log(bubbleSort([15, 20, 30, 45, 18, 50]));

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let temp = array[i];
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
//   return array;
}
console.log(insertionSort([20, 10, 50, 5, 3, 40, 30, 15]));

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let len = array.length;
  let tmp;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min != i) {
      tmp = array[i];
      array[i] = array[min];
      array[min] = tmp;
    }
  }
  return array;
}
console.log(selectionSort([20, 10, 50, 5, 3, 40, 30, 15]));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
