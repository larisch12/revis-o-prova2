let primeiroNome = "Larissa"
let ultimoNome = "Schmitz"
let nomeCompleto = primeiroNome + " " + ultimoNome
console.log(nomeCompleto)

//manipulação de numbers
let numero1 = 10
let numero2 = 20

let soma = numero1 + numero2
let subtração = numero1 - numero2
let multiplicação = numero1 * numero2
let divisao = numero1/numero2
console.log(soma, subtração, multiplicação, divisao)

//booleanos
let estaChovendo = false
if(estaChovendo){
    console.log("esta chovendo")
}else{
    console.log("não esta chovendo")
}

//null e undefined
let resposta = null
let nota
console.log(resposta, nota)

let idUnico = Symbol ()

let produto ={
    [idUnico]: 123,
    nome: "Camiseta"
}
console.log(produto[idUnico], produto.nome)

//bigint
let numeroGrande = BigInt("1234567890123456789012345678901234567890");
let numero = 1234567890123456789012345678901234567890
let numero3 = numeroGrande
console.log(numeroGrande, numero, "\n", numero3)
