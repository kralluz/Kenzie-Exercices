/* Exercício 1
Crie uma função que recebe três parâmetros: uma frase, uma palavra antiga e uma palavra nova. A função deve buscar por todas as ocorrências da palavra antiga na frase e substituí-las pela palavra nova. Então, a função deve retornar a nova frase com o resultado da substituição. */

function palavra(frase, palavraAntiga, palavraNova){
    let result = frase.replace(palavraAntiga, palavraNova);
    return result;
}

palavra ("o céu é azul", "azul", "vermelho")


/* Exercício 2
Escreva uma função em JavaScript que recebe três parâmetros numéricos: nota1, nota2 e nota3, que representam as notas de um aluno em três avaliações. A função deve calcular a média aritmética das notas e arredondar o resultado para uma casa decimal.

A função deve retornar a média arredondada em uma mensagem no seguinte formato: "A média do aluno é <media>." */

function arredondarDecimal (nota1, nota2, nota3){
    let media = ( nota1 + nota2 + nota3) / 3;
    let mediaArredondada = media.toFixed(1);
    return `A média do aluno é ${mediaArredondada}`
}

let x = arredondarDecimal(10, 10, 9) //



/* Exercício 3
Escreva uma função em JavaScript que recebe dois parâmetros numéricos: valorUnitario e quantidade, que representam o valor unitário de um produto e a quantidade comprada, respectivamente. A função deve calcular o valor total da compra, 
aplicando um desconto progressivo no valor unitário 
e formatando o resultado com duas casas decimais.

O desconto será aplicado de acordo com a quantidade comprada:

10% de desconto se a quantidade comprada for maior ou igual a 5;
20% de desconto se a quantidade comprada for maior ou igual a 10.
Em seguida, a função deve substituir o ponto por vírgula na string do valor total, e deve retornar uma mensagem no seguinte formato: "O valor total da compra é R$ <valorTotal>." */


function desconto(valorUnitario, quantidade){
    let valorTotal = valorUnitario * quantidade ;
    if (quantidade >= 5 && quantidade < 10){
        valorTotal = valorTotal - (valorTotal * 0.1);
    } else if (quantidade > 9) {
        valorTotal = valorTotal - (valorTotal * 0.2);
    }
    return `O valor total da compra é R$ ${valorTotal.toFixed(2)}.`
}

console.log(desconto(10,5))
