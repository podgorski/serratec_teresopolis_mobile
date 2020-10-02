const itens = [
  { nome: "Arroz 1kg", valor: 5.90 },
  { nome: "Feijão Preto 1kg", valor: 8.90 },
  { nome: "Farinha 1kg", valor: 1.50 },
  { nome: "Leite 1l", valor: 4.50 },
  { nome: "Fubá", valor: 2.10 }
]

function removeAcento(text) {
  text = text.toLowerCase();
  text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
  text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
  text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
  text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
  text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
  text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
  return text;
}

//Aplicar um desconto percentual em cada item do carrinho de compra;

// console.log('antes do desconto', itens)

const desconto = (arr, percentual) => {
  const produtos_com_desconto = arr.map((item) => {
    let valor_desconto = item.valor * (1 - (percentual / 100))
    valor_desconto = valor_desconto.toFixed(2)
    item.valor = parseFloat(valor_desconto)
    return item
  })

  return produtos_com_desconto
}

// desconto(itens, 10);
// console.log('depois do desconto', itens)

// Calcular o total da compra realizada;

const calcular_compra = (arr) => {
  const total = arr.reduce((soma, { valor }) => {
    return soma + valor
  }, 0)

  return parseFloat(total.toFixed(2))
}


const calcular_compra_ = (arr) => {
  let total = 0;
  arr.forEach((item) => {
    total += item.valor
  })

  return parseFloat(total.toFixed(2))

}

// console.log(calcular_compra_(itens))

// Buscar itens a partir do valor informado e/ou nome;

// function calcular_compra__(id, preco) {
//   const filtrar = itens.filter(({ nome, valor }) => {
//     return (nome == id || valor == preco)
//   })

//   return filtrar
// }

// console.log('Esses foram os produtos encontrados: ', calcular_compra__('Fubá', 4.50))

const filtar_por_valor_ou_nome = (arr, valor, nome) => {

  const itens_filtrados = arr.filter((item) => {

    return item.valor >= valor || (item.nome.indexOf(nome) > -1)
  })

  return itens_filtrados

}

// console.log(filtar_por_valor_ou_nome(itens, 5.00, "Feijão"))


const filtar_por_nome = (arr, nome) => {

  const esta_no_carrinho = arr.some((item) => {

    return removeAcento(item.nome) == removeAcento(nome)
  })

  return esta_no_carrinho

}



// console.log(filtar_por_nome(itens, "FÚBÀ"))


//Aplicar desconto percentual em todos os itens que tenham um determinado valor acima que o especificado
const desconto_condicional = (arr, valor, percentual) => {
  return desconto(filtar_por_valor_ou_nome(arr, valor), percentual)
}

console.log(desconto_condicional(itens, 5.00, 50))

