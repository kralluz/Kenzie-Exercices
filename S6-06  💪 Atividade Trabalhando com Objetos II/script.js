const carros = [
{
    modelo: "Ka",
    marca: "Ford",
    ano: "2000",
    cor: "Branco",
    completo: false,
    acessorios: ['Vidro Elétrico'],
    preco: 6799.33
},
{
    modelo: "Gol",
    marca: "VW",
    ano: "1996",
    cor: "Preto",
    completo: false,
    acessorios: ['Trava'],
    preco: 12199.13
},
{
    modelo: "Palio",
    marca: "Fiat",
    ano: "1995",
    cor: "Verde",
    completo: false,
    acessorios: [],
    preco: 11099.1
},
{
    modelo: "Monza",
    marca: "Chevrolet",
    ano: "1993",
    cor: "Vinho",
    completo: false,
    acessorios: [],
    preco: 14578.25
},
{
    modelo: "Saveiro",
    marca: "VW",
    ano: "2013",
    cor: "Prata",
    completo: false,
    acessorios: [],
    preco: 28399.13
},
{
    modelo: "Gol",
    marca: "VW",
    ano: "1996",
    cor: "Preto",
    completo: true,
    acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
    preco: 14350.45
},
{
    modelo: "Gol",
    marca: "VW",
    ano: "2013",
    cor: "Preto",
    completo: true,
    acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
    preco: 22109.21
},
{
    modelo: "Montana",
    marca: "Chevrolet",
    ano: "2011",
    cor: "Azul",
    completo: false,
    acessorios: ['Alarme'],
    preco: 15999.13
},
{
    modelo: "Stilo",
    marca: "Fiat",
    ano: "2000",
    cor: "Preto",
    completo: false,
    acessorios: [],
    preco: 17251.36
}
]

function contaTotal(carros) {
    return  carros.length
}

function precoTotal() {
    let somaTotal = 0
    for(let count = 0; count < carros.length; count++){
        somaTotal + carros.count.preco
    }
    return `A soma do preço de todos veículos é R$ ${somaTotal}`
}

function filtraPorMarca(marca) {
  let modelosMarca = []
    for(let count = 0; count < carros.length; count++){
      if (carros[count].marca === marca){
        modelosMarca.push(carros[count].modelo);
      };
    }
}


/* Crie uma função que recebe a lista de carros e o acessório procurado como parâmetro, filtre e retorne todos veículos que tenham o acessório. */

function filtraPorAcessorio(carros, acessorio) {
  let modelosComAcesorio = []
  for(let count = 0; count < carros.length; count++){
    if(carros[count].acessorios.includes(acessorio)){
      modelosComAcesorio.push(carros[count])
    }
  }
  return modelosComAcesorio;
}

/* Crie uma função que recebe a lista de carros como parâmetro, filtre e retorne todos veículos que sejam completos. */

function eCarroCompleto(carros) {
  let modelosCompletos = []
  for(let count = 0; count < carros.length; count++){
    if(carros[count].completo){
      modelosCompletos.push(carros[count])
    }
  }
  return modelosCompletos;
}

  /* Crie uma função para adicionar novos carros a lista. Retorne a lista de carros atualizada. */

  function adicionaCarro(marca, ano, cor, completo, acessorios, preco) {
    let newCar = 
    {
      marca: marca,
      ano: ano,
      cor: cor,
      completo: completo,
      acessorios: acessorios,
      preco: preco
    }
      carros.push(newCar)
    return carros
  }

/* Crie uma função que recebe como parâmetro a lista de carros e o índice de um veículo.
Remova o elemento referente ao índice e retorne a lista atualizada.
Lembre-se de tratar quando a posição for inválida. */

  function removeCarro(carros, indice) {
    if (indice > 0 && indice <= carros.length) {
      carros.splice(indice, 1);
    } else{
      "Posição do carro inválida"
    }
    return carros
  }
  
  
  
  /* Crie uma função que recebe a lista de carros como parâmetro.
  Retorne a quantidade de carros com menos de 10 anos. */
  
  function contaCarrosNovos(carros) {
    let carrosNovos = []
    for(let count = 0; count < carros.length; count++){
      if(carros[count].ano <= "2013"){
        carrosNovos.push(carros[count])
      }
    }
    return carrosNovos
  }



  /* Seu chefe percebeu que deixou de incluir um campo importante nos objetos, o campo 'donos'.
Todos os carros da concessionária são de segunda mão.
Com isso, desenvolva uma função que recebe como parâmetro a lista de carros, um índice da lista e um objeto pessoa. Dentro do objeto pessoa deve constar o nome do proprietário e um telefone para contato.
Sabemos que não existe esta propriedade, então a propriedade donos deverá ser criada.
*/


function includeOwner(carros, indice, pessoa){
  let pessoa = {
    nome:"nome",
    numeroTel:123456789
  }
  carros[indice].donos = pessoa
  return carros
}

console.log(includeOwner(carros, 0))