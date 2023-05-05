function fibonacciNumbers(x){
    let ANTERIOR = 0
    let ATUAL = 1
    let PROXIMO
    
    console.log(ANTERIOR)
    console.log(ATUAL)
    for (let count = 2; count <= x; count++){
        PROXIMO = ANTERIOR + ATUAL
        console.log(PROXIMO)
        ANTERIOR = ATUAL
        ATUAL = PROXIMO
    }
}

function wheatGrainsCounter(){
    let grains = 1
    for(let squares = 1; squares <= 64; squares++){
        let soma = grains + grains
        
        console.log(soma.toLocaleString('pt-BR'))
        grains = grains + grains
    }

}

wheatGrainsCounter()

/* Escrever um programa que calcule e apresente o somatório do número de grãos de trigo que se pode obter num tabuleiro de xadrez, obedecendo à seguinte regra:

Colocar um grão de trigo no primeiro quadro e nos quadros seguintes o dobro do quadro anterior.

Ou seja, no primeiro quadro coloca-se um grão, no segundo quadro colocam-se dois grãos (neste momento, tem-se três grãos), no terceiro quadro colocam-se quatro grãos (tendo neste momento sete grãos), no quarto quadro colocam-se oito grãos (tendo-se então 15 grãos) até o limite de casas que é 64. A quantidade de grãos adicionados é sempre o dobro da quantidade anterior. */