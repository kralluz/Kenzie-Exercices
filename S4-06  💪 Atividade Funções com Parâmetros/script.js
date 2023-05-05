/* Exercício 1
Desenvolva uma função com apenas um parâmetro. A função deve retornar o valor de caractere P se o parâmetro for positivo, e N se o parâmetro for zero ou negativo.*/

function positiveornegative (a){
    if(a > 0){
        return "p";
    } else { //não usei o (a <= 0) pois se ele não é maior que zero, automaticamente ele é ou menor ou igual!
        return "n";
    }
}

/*Exercício 2
Desenvolva uma função que informe a quantidade de dígitos de um determinado número inteiro informado por parâmetro.*/

function quantityDigits (a){
    let quantity = a.toString().length; //o método toString é para transformar o número em uma string e o length para contar quantos caracteres.
    return quantity // retorna o valor da variável quantity.
}

/*Exercício 3
Desenvolva uma função que some dois números passados por parâmetro. A soma só deve acontecer se o primeiro número passado por parâmetro for maior que o segundo.
Caso contrário você deverá retornar a seguinte frase: "O primeiro número não é maior que o segundo."*/

function soma(a,b){
    if (a > b){
        let calculo = a + b;
        return calculo
    } else {
        return "O primeiro número não é maior que o segundo."
    }
}

/*Exercício 4
Desenvolva uma função com 2 parâmetros. O primeiro deve se chamar palavra, e o segundo deve se chamar letra. Se a palavra passada no primeiro parâmetro começar com a letra passada como segundo parâmetro, retorne true. Se a palavra passada no primeiro parâmetro não começar com a letra passada no segundo parâmetro, retorne false.*/

function verificaLetra(palavra, letra){
    if (startsWith(letra)){
    return true;
} else {
    return false;
}
}




/*Exercício 5
Desenvolva uma função com dois parâmetros para saber se o horário corresponde com o funcionamento do /pergunta. O primeiro parâmetro deve-se chamar inicio, e o segundo deve-se chamar termino. Se o horário de inicio for maior ou igual a 11 e menor ou igual a 19, retorne "O /pergunta está em horário de funcionamento." Caso contrário retorne "O /pergunta não está em horário de funcionamento." */


function expedientePergunta (inicio, termino){
    if (inicio >= 11 && termino >= 19){
        return "O /pergunta está em horário de funcionamento."
    } else {
        return "O /pergunta não está em horário de funcionamento."
    }
}