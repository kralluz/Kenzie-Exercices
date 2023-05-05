/* let valorTotalDoPedido, quantidade = 0
let escolha = parseInt(prompt("Digite o código do produto ou 0 para sair")) */


/* Especificação  |  Código  |    Preço   |

Cachorro Quente   |    101   |   R$ 1,20  |

Bauru Simples     |    102   |   R$ 1,30  |        

Bauru com ovo     |    103   |   R$ 1,50  |

Hambúrguer        |    104   |   R$ 1,20  |    */

/* while (escolha != 0){
    if (escolha == 101){
        quantidade = parseInt(prompt("Qual a quantidade deste item?"))
        valorTotalDoPedido += quantidade * 1.20
    }else if (escolha == 102){
        quantidade = parseInt(prompt("Qual a quantidade deste item?"))
        valorTotalDoPedido += quantidade * 1.30
    }else if (escolha == 103){
        quantidade = parseInt(prompt("Qual a quantidade deste item?"))
        valorTotalDoPedido += quantidade * 1.50
    }else if (escolha == 104){
        quantidade = parseInt(prompt("Qual a quantidade deste item?"))
        valorTotalDoPedido += quantidade * 1.20
    }else {
        alert("Produto indisponível")
    }
    escolha = parseInt(prompt("Digite o código do produto ou 0 para finalizar o pedido"))
    alert(`Seu pedido ficou em ${valorTotalDoPedido}`)
}
 */


/* Faça um programa que peça um valor entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.  */

/* let valor = parseInt(prompt("digite um valor válido"))

while (valor <= 0 || valor >= 10 || isNaN(valor)){
        alert("Valor inválido")
        valor = parseInt(prompt("digite um valor válido"))
} */

/* Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações. */




/* let name = prompt("digite o nome de usuário")
let password = prompt("digite a senha")

while (password === name){
    alert("senha inválida")
    password = prompt("digite a senha")
} */


/* Faça um programa que enquanto a entrada for 
números inteiros 
positivos, 
menores que 10,
continue somando. Quando um valor negativo ou maior que 10 for informado, pare a execução, alerte a soma e a média. */   

let soma = 0;
let quantidade = 0;
let entrada = parseInt(prompt("Digite um número inteiro positivo menor que 10:"));

while (entrada >= 0 && entrada < 10) {
    soma += entrada;
    quantidade++;
    entrada = parseInt(prompt("Digite outro número inteiro positivo menor que 10:"));
}

if (quantidade > 0) {
    alert(`Soma: ${soma}`);
} else {
    alert("Nenhum número válido foi informado.");
}
