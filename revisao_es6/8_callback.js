let salarioBruto = 1500;

function calculaSalario(salarioBruto, cb) {
  const inss = salarioBruto * 0.15;
  const vr = salarioBruto * 0.05;
  const vt = salarioBruto * 0.06;
  const fgts = salarioBruto * 0.40;
  const descontos = inss + vr + vt + fgts;

  return cb(salarioBruto - descontos);
}


function salarioComDependente(dependentes, salarioBruto) {
  const novo_salario = calculaSalario(salarioBruto, function (salario) {
    const adicional = dependentes * 50;
    return salario + adicional
  })

  return novo_salario
}


function salarioDescontoRH(salarioBruto) {
  // const cb = function (salario) {
  //   return salario
  // }
  const novo_salario = calculaSalario(salarioBruto, cb)

  return novo_salario
}

console.log(salarioDescontoRH(salarioBruto))
console.log(salarioComDependente(3, salarioBruto))



