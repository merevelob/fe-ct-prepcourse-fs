/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   const arrayPropiedades = Object.keys(objeto);
   const arrayValores = Object.values(objeto);
   var arrayCompleto = [];
   for (let i = 0; i < arrayPropiedades.length; i++) {
      arrayCompleto[i] = [arrayPropiedades[i], arrayValores[i]];
   }
   return arrayCompleto;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var ordArr = Array.from(string).sort();
   var countObj = {};
   ordArr.forEach(element => {
      countObj[element] = (countObj[element] || 0) + 1;
   });
   return countObj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayArr = string.match(/[A-Z]/g);
   var minArr = string.match(/[a-z]/g);
   var neoArr = mayArr.concat(minArr);
   return neoArr.join('');
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   const novaFrase = frase.split(' ');
   var mirrorFrase = [];
   
   String.prototype.reverse = function () {
      var separateWord = this.split('');
      separateWord.reverse();
      var revWord = separateWord.join('');
      return revWord;
   };

   for (let i = 0; i < novaFrase.length; i++) {
      mirrorFrase[i] = novaFrase[i].reverse();
   }

   return mirrorFrase.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   String.prototype.reverse = function () {
      var separateWord = this.split('');
      separateWord.reverse();
      var revWord = separateWord.join('');
      return revWord;
   };

   numStr = numero.toString();
   if (numStr === numStr.reverse()) return 'Es capicua';
   else return 'No es capicua'; 
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var strArr = string.split('');
   var filtArr = strArr.filter(car => car !== 'a' && car !== 'b' && car !== 'c');
   return filtArr.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var neoArr = [];
   var largestArray = [];
   var shortestArray = [];
   if (array1.length >= array2.length) {
      largestArray = array1;
      shortestArray = array2;
   } else {
      largestArray = array2;
      shortestArray = array1;
   }

   for (let i = 0; i < largestArray.length; i++) {
      if (largestArray.includes(shortestArray[i]) === true) neoArr.push(shortestArray[i]);
   }
   return neoArr;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
