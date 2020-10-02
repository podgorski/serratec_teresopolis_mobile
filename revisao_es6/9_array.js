const numeros = [1, 2, 3, 4, 5]

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// arr.forEach(function (item) {
//   console.log(item)
// })

// var dobro = numeros.map(function (numero) {
//   return numero * 2
// });
// console.log('map', dobro); // 2, 4, 6, 8, 10

// var maioresQueTres = numeros.filter(function (numero) {
//   return numero > 3
// });
// console.log('filter', maioresQueTres); // 4, 5

// var procurar = numeros.find(function (numero) {
//   return numero > 3;
// });
// console.log('procurar', procurar); // 3


// every
// var todosMaiorQueZero = numeros.every(function (numero) {
//   return numero > 2
// });
// console.log(todosMaiorQueZero); // true

// find
// var algumMaiorQueQuatro = numeros.some(function (numero) {
//   return numero > 5
// });
// console.log(algumMaiorQueQuatro); // true

var total = 0;
numeros.forEach((item) => {
  total += item
});
console.log(total)

// var soma = numeros.reduce(function (somatorio, numero) {
//   return somatorio + numero;
// }, 0)

// console.log(soma);


