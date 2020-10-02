function exibeMensagem() {
  if (true) {
    var escopoFuncao = 'escopoFuncao'
    console.log('dentro escopo ', escopoFuncao)
  }
  console.log('fora escopo ', escopoFuncao)
}

exibeMensagem();