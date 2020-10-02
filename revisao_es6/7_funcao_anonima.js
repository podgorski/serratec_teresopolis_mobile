// const soma = function (a, b) {
//   const resultado = a + b;
//   return resultado
// }

// console.log(soma(10, 2))

// const ola = function () {
//   console.log('oi')
// }
// const quando_fazer = 2000

// setTimeout(ola, quando_fazer);


const somar = function (a, b) { return a + b }
const subtrair = function (a, b) { return a - b }
const multiplicar = function (a, b) { return a * b }

function calculadora(parametro_um, parametro_dois, op) {
  return op(parametro_um, parametro_dois)
}

function calculadora_primario(p1, p2, op, cb) {
  return cb(calculadora(p1, p2, op))
}

calculadora_primario(2, 20, subtrair, function (resultado) {
  console.log(`amiguinho sabia que o resultado é ${resultado}`)
})