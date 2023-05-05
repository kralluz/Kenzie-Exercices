/* Exercício 1
É necessário realizar a soma com uma função e depois reutilizar esta função para fazer outra operação matemática. Siga os tópicos a seguir:
Declare uma função somaReutilizavel que receberá dois parâmetros a e b.
Desenvolva a lógica deste algoritmo para obter o resultado da soma dos dois parâmetros.
Após isso e já fora da função, declare uma variável resultado e atribua um valor 0 a ela.
Utilizando a função somaReutilizavel, você deve realizar a operação 10 + 10 e multiplicar por 5, armazenando o valor total na variável resultado.
Mostre o valor da variável resultado através do console. */

function somaReutilizavel (a, b) {
    return a+b;
}

let resultado = 0
    console.log(somaReutilizavel(10,10)*5)


    /* Exercício 2
É necessário obter o nome completo de um usuário e depois selecionar apenas as letras iniciais do nome e sobrenome, e para isso é possível desenvolver três funções para a tarefa ser concluída. Siga os tópicos a seguir:
Declare uma função letraInicial que receberá dois parâmetros nome e sobrenome e retornará a apenas a primeira letra maiúscula de nome e a primeira letra maiúscula de sobrenome.
Declare uma função nomeCompleto que não receberá parâmetros e retornará uma frase contendo as iniciais do nome e sobrenome. É necessário reutilizar a função letraInicial para retornar a seguinte frase: "As letras inicias do meu nome completo são -letraInicialDoNome- -letraInicialDoSobrenome-"
Mostre a frase através do console. */

function letraInicialNome(nome){
    let primeiraLetraNome = nome[0]
    return primeiraLetraNome
}

function letraInicialSobrenome(sobrenome){
    let primeiraLetraSobrenome = sobrenome[0]
    return primeiraLetraSobrenome
}

function nomeCompleto(){
    return `As letras inicias do meu nome completo são ${primeiraLetraNome("Carlos")} ${primeiraLetraSobrenome("Alves")}.`
}

/* Exercício 3
O objetivo deste exercício é desenvolver três funções para obter um resultado final. É necessário obter o número de letras de um produto e verificar se o total de caracteres é par ou ímpar. Siga os tópicos a seguir:

Declare uma função par que receberá um parâmetro n, e este parâmetro representa um número. Desenvolva a lógica para retornar true se o número foi par ou false se não for par.
Declare uma função impar que receberá uma parâmetro n, e este parâmetro representa um número. Desenvolva a lógica para retornar true se o número foi ímpar ou false se não for ímpar.
Declare uma função letrasProduto que receberá um parâmetro produto, e este produto representará uma string. Você deverá obter o número de caracteres, ou seja, o tamanho da palavra produto e reutilizando as funções par e impar você deverá verificar se o tamanho é par ou ímpar.
Retorne "O número de letras deste produto é par" se o tamanho da palavra produto for par ou "O número de letras deste produto é ímpar" se o tamanho da palavra produto for ímpar. */

function par(n){
    if (isNaN(n) == false) {
        if (n % 2 === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return "O valor digitado não é um número!"
    }    
}

function impar(n){
    if (isNaN(n) == false) {
        if (n % 2 === 0) {
            return false;
        } else {
            return true;
        }
    } else {
        return "O valor digitado não é um número!"
    }    
}

function letrasProduto(produto){
    quantidadeCaracteres = produto.length
    if (par(quantidadeCaracteres) == true){
        return "O número de letras deste produto é par"
    } else {
        return "O número de letras deste produto é ímpar"
    }
}

letrasProduto("sabonete")