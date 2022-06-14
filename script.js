let precoMacarrao = parseFloat(prompt("Digite o valor do macarrão"))
let quantidadeMacarrao = parseInt(prompt("Quantas Unidades ?"))

let precoVinho = parseFloat(prompt("Digite o valor do Vinho"))
let quantidadeVinho = parseInt(prompt("Quantas Unidades ?"))

let precoFeijao = parseFloat(prompt("Digite o valor do Feijão"))
let quantidadeFeijao = parseInt(prompt("Quantas Unidades ?"))

let precoArroz = parseFloat(prompt("Digite o valor do Arroz"))
let quantidadeArroz = parseInt(prompt("Quantas Unidades ?"))

let precoErvilha = parseFloat(prompt("Digite o valor da Ervilha"))
let quantidadeErvilha = parseInt(prompt("Quantas Unidades ?"))

let precoRefri = parseFloat(prompt("Digite o valor do Refrigerante"))
let quantidadeRefri = parseInt(prompt("Quantas Unidades ?"))

let voce = 1
let amigo = 1

let totalMacarrao = precoMacarrao * quantidadeMacarrao
let totalVinho = precoVinho * quantidadeVinho
let totalFeijao = precoFeijao * quantidadeFeijao
let totalArroz = precoArroz * quantidadeArroz
let totalErvilha = precoErvilha * quantidadeErvilha
let totalRefri = precoRefri * quantidadeRefri

let total = totalArroz + totalErvilha + totalFeijao + totalMacarrao + totalRefri + totalVinho
let metade = total/2

alert(`Valor total a ser pago: ${total}`)

if(total % 2 == 0){
    voce = metade - totalVinho
    amigo = metade + totalVinho
  }else{
    voce = metade
    amigo = metade
  }
  console.log(`Valor total da compra: ${total}. O valor que sera pago por você: ${voce} e o valor que sera pago pelo seu amigo: ${amigo}`)
  alert(`O valor que sera pago por você: ${voce} e o valor que sera pago pelo seu amigo: ${amigo}`)


