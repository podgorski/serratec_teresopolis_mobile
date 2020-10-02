const Aluno = {
  nome: 'Pedro Sales',
  idade: 19,
  periodo: 7
}
// //REST
// const { nome, ...resto } = Aluno;
// console.log(nome);
// console.log(resto);





// SPREAD
// const aluno_ = { ...Aluno, periodo: "setimo", turno: "noite" };
// console.log(aluno_);



// REST
// function classificacao(primeiro, segundo, terceiro, ...outros) {
//   console.log(`No pódio estão: ${primeiro}, ${segundo}, ${terceiro}. Os demais são: ${outros}`);
// }

// classificacao('Marcos', 'Luana', 'Rogério', 'Fernando', 'Felipe', 'Matheus');
// // No pódio estão: Marcos, Luana, Rogério. Os demais são: Fernando,Felipe



const coresPrimarias = ['vermelho', 'azul', 'verde'];
const coresSecundarias = ['roxo', 'rosa', 'laranja'];

// SPREAD
// const todasCores = [...coresPrimarias, ...coresSecundarias];
// console.log('todasCores', todasCores); // [ 'vermelho', 'azul', 'verde', 'roxo', 'rosa', 'laranja' ]

// return

function atualizar_dependentes(obj, novo_dependente) {
  const dependentes = [...obj.dependentes, novo_dependente]
  // console.log(dependentes)
  return { ...obj, dependentes }
}


let antonio = {
  nome_completo: 'Antonio Felipe Podgorski Bezerra',
  idade: 35,
  dependentes: [
    {
      nome: 'Fernanda',
      relacao: 'Esposa'
    },
    {
      nome: 'Maria Eduarda',
      relacao: 'Filha'
    },
  ]
}

console.log('antes', antonio)

antonio = atualizar_dependentes(antonio, { nome: 'Liz', relacao: 'Filha' })

console.log('depois', antonio)

