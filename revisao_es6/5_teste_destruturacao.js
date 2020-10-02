const VideoGame = {
  modelo: 'PlayStation 5',
  fabricante: 'Sony',
  midia: 'Blu-Ray',
  armazenamento: '1TB',
  controles: 2,
  preco: 'R$ 2000.00'
}

//Sem Desestruturação
// let valor_com_virgula = VideoGame.preco.replace(".", ",");
// console.log(VideoGame.modelo + " " + valor_com_virgula);


// return

//Com Desestruturação
// const { preco, modelo } = VideoGame;

// console.log(`${modelo} ${preco.replace(".", ",")}`)

// return


// const { preco, modelo } = VideoGame;

// valor_com_virgula = preco.replace(".", ",");

// console.log(`${modelo} ${valor_com_virgula}`);


const params = {
  resposta: '200',
  total: '56.50',
  desconto: false,
  itens: ['caderno', 'lápis', 'borracha']
}

function mostrarMaterialOrdenado({ total, itens, desconto }) {
  itens.forEach((item, index) => {
    console.log(`${index + 1} - ${item}`);
  });
  console.log(`total = ${total} ${desconto ? "com" : "sem"} desconto`)
}

mostrarMaterialOrdenado(params);


// function mostrarMaterialOrdenado({ itens, total }) {
//   itens.forEach((item, index) => {
//     console.log(`${index + 1} - ${item}`);
//   });
//   console.log(`total = ${total}`)
// }


// mostrarMaterialOrdenado(params);
