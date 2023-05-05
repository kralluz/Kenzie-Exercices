/* Escreva uma função que apresente como resultado os quadrados dos números inteiros existentes na faixa de valores de 15 a 200.

Exemplo:
chamada da função: nome_da_sua_função()
Saída: 225, 256, 289 ...40000
*/

function fifteenToTwoSquares(){
    for (n = 15; n <= 200; n++ ){
        console.log(n*n)
    }
}

/* Escreva uma função que apresente a soma dos cem primeiros números naturais.
(1+2+3+...+98+99+100).

Exemplo:
chamada da função: nome_da_sua_função()
Saída: 5.050
*/

function sumOfOneHundred (){
    let soma = 0
    for (let count = 1; count <= 100; count++){
        console.log(`${soma} + ${count} `)
        soma+=count 
        console.log(` = ${soma}`)
    }
}

/* Escreva uma função que apresente todos os valores numéricos menores que 200 que são divisíveis por 4.

Exemplo:
chamada da função: nome_da_sua_função()
Saída: 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40 ...196
*/

function minorTwoHundredDivisibleFour(){
    for (n = 0; n < 200; n++){
        if (n % 4 == 0){
            console.log(n)
        }
    }
}

/* Escreva uma função que calcule o resultado da soma e da média aritmética dos valores pares situados na faixa numérica de 50 até 70.

soma = 50+52+54...+70
média_aritmética = soma / qtd_números_pares_no_intervalo⁠⁠ Exemplo:
chamada da função: função_o_nome_da_sua_função()
Saída: A soma é 660 e a média é 60.*/

function resultSumAndAverage(){
    let soma = 0
    let quantidadePares = 0

    for(n = 50; n <= 70; n++){
        if (n % 2 == 0){
            soma += n
            quantidadePares++
        }
    }
    const media = soma / quantidadePares;
    console.log(`A soma é ${soma} e a média é ${media}.`)
}

resultSumAndAverage()