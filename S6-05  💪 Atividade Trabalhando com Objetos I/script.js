const pessoa = {
    Nome: carlos,
    AnoDeNascimento,
    CPF,
    Cidade,
    Estado,
    Logradouro,
}

const escola = {
    Nome,
    CNPJ,
    ÁreaDeAtuação,
    Cidade,
    Estado,
    Logradouro,
    Curso,
}

const curso = {
    Nome : "Sistemas",
    DuraçãoEmAnos : 1,
    Turma : 18,
    Módulos: 12, 
}

const endereço = {
    Cidade : ceres,
    Estado : GO,
    Logradouro : 125,
    Cep : 309888000,
}

const carro = {  
    placa: "ABC123",   
    classes: ["sedan"],  
    luxo: true,
    potencia: 200, 
    estacionado: true , 
}

/*Escreva uma função chamada obterPlaca. A função, quando chamada, deve retornar a placa do carro.
Exemplo de chamada da função: obterPlaca()
Saída: "ABC123" */


function obterPlaca(placaCarro){
    return carro.placa
}

/* Escreva uma função chamada verificarClasses. A função, quando chamada, deve retornar a(s) classe(s) do carro. Perceba que a propriedade é um array - quando o array possuir apenas um elemento, retorne somente o valor do elemento, e quando o array possuir mais de um elemento, retorne todo o array.
Exemplo de chamada da função: verificarClasses()
Saída: "sedan" */

function verificarClasses(){
    if (carro.classes.length === 1){
        return carro.classes[0]
    }return carro.classes
}

/* Escreva uma função chamada potenciaReal. A função, quando chamada, deve retornar a potência real do carro. Caso o carro tenha a propriedade luxo definida como true, o valor da propriedade potencia é elevado ao quadrado. Retorne o valor da potência do carro.
Exemplo de chamada da função: potenciaReal()
Saída: 40000 */

function potenciaReal(){
    if(carro.luxo == true){
        return carro.potencia*potencia
    }
}

/* Escreva uma função chamada adicionarNovaClasse. A função deve receber uma string como parâmetro. A função realiza a adição de mais uma classe na lista de classes do carro. Cada carro pode ter no máximo 3 classes. Antes de adicionar uma classe, verifique se o tamanho da lista de classes é maior que 3. Caso seja maior, retorne: "Este carro não pode ter mais classes".

Caso seja menor, a função deverá verificar se o valor recebido é semelhante a algum valor permitido. As classes permitidas são: 'sedan', 'hatchback', 'suv', 'crossover' e 'cupê'.

Se o valor for permitido, a função deve verificar se o valor é semelhante a algum valor já contido no objeto.

Se sim, retorne: "O carro já possui a classe x". Caso seja diferente, retorne: "Classe x adicionada com sucesso". Onde x é o valor da classe.

Exemplo de chamada da função: adicionarNovaClasse('cupê')
Saída: "Classe cupê adicionada com sucesso" */


function adicionarNovaClasse(newClass){

    const classesPermitidas = ['sedan', 'hatchback', 'suv', 'crossover','cupê']

    if(carro.classes.length >= 3){
        return "Este carro não pode ter mais classes"
    }else if (classesPermitidas.includes(newClass)){  
            if (carro.classes.includes(newClass)){
                return "o carro já possui a classe " + newClass
            }
            carro.classes.push(newClass)
            return `Classe ${newClass} adicionada com sucesso!`
    }return "Classe inválida"
}


/* Escreva uma função chamada naoMaisLuxo. A função deve verificar se o carro está estacionado e se a classe "Luxo" está presente na lista de classes do carro. Se ambas as condições forem verdadeiras, altere a propriedade luxo de true para false e retorne: .

Exemplo de chamada da função: naoMaisLuxo()
Saída: "O carro ABC123 não é mais considerado um carro de luxo" */


function naoMaisLuxo(){
    if(carro.estacionado === true && carro.classes.includes(luxo)){
        carro.luxo = false
        return `"O carro ${placa} não é mais considerado um carro de luxo"`
    }
}
