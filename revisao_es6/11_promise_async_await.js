// Sistema externo //
// const APICorreios = (funcionou, cb, err) => {

//   setTimeout(function () {
//     if (funcionou) {
//       cb({
//         status: 200,
//         response: {
//           cep: "20270320",
//           rua: "rua gonçalves crespo"
//         }
//       })
//     } else {
//       err({
//         status: 500,
//         response: {}
//       })
//     }

//   }, 2000)

// }

const APICorreios = (funcionou) => new Promise((resolve, reject) => {

  setTimeout(function () {
    if (funcionou) {
      resolve({
        status: 200,
        response: {
          cep: "20270320",
          rua: "rua gonçalves crespo"
        }
      })
    } else {
      reject({
        status: 500,
        response: {}
      })
    }

  }, 1000)
})


// Nosso Sistema //


// function nossoSistema() {

//   //.....CEP....

//   //Callback
//   APICorreios(false, function (sucesso) {
//     console.log(sucesso)
//   }, function (erro) {
//     console.log(erro)
//   })

//Promise
// APICorreios(false).then(function (sucesso) {
//   console.log(sucesso)
//   APICorreios(false).then(function (sucesso) {
//     console.log(sucesso)
//     APICorreios(false).then(function (sucesso) {
//       console.log(sucesso)
//       APICorreios(false).then(function (sucesso) {
//         console.log(sucesso)
//       }).catch(function (erro) {
//         console.log(erro)
//       })
//     }).catch(function (erro) {
//       console.log(erro)
//     })
//   }).catch(function (erro) {
//     console.log(erro)
//   })
// }).catch(function (erro) {
//   console.log(erro)
// })




//   //.....FIM CEP....

// }


// const nossoSistema = () => {

// }

async function nossoSistema() {


  // try {
  //   const resultado1 = await APICorreios(true)
  //   console.log(resultado1)
  // } catch (err) {
  //   console.log(err)
  // }
  // try {
  //   const resultado2 = await APICorreios(false)
  //   console.log(resultado2)
  // } catch (err) {
  //   console.log(err)
  // }
  // try {
  //   const resultado3 = await APICorreios(true)
  //   console.log(resultado3)
  // } catch (err) {
  //   console.log(err)
  // }
  // try {
  //   const resultado4 = await APICorreios(true)
  //   console.log(resultado4)
  // } catch (err) {
  //   console.log(err)
  // }

  try {
    const resultado1 = await APICorreios(true)
    console.log(resultado1)
    const resultado2 = await APICorreios(false)
    console.log(resultado2)
    const resultado3 = await APICorreios(true)
    console.log(resultado3)
    const resultado4 = await APICorreios(true)
    console.log(resultado4)
  } catch (err) {
    console.log(err)
  }



}


nossoSistema()














