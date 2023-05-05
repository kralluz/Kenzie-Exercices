//Exercício 1
//Desenvolva uma função que mostre no console a frase "Hello World!".

/* function frase() {
    console.log("Hello World!");
}

frase(); */

//Exercício 2
//Desenvolva uma função para saber se o(a) aluno(a) possui métricas para virar monitor(a).
//Requisitos:
//100 de Entregas
//100 de Entrevistas Técnicas
//100 de Presença
//Se os requisitos forem atingidos, mostre no console "Possível monitor(a)." Se os requisitos não forem atingidos, mostre no console "Selecionar outro(a) aluno(a)."

/* function monitor() {
    let name = prompt("Qual o nome do Aluno?")
    let entregas = prompt("digite a quantidade de entregas feitas")
    let entrevistasTecnicas = prompt("Entrevistas Técnicas")
    let presenca = prompt("Presença")

    const criterio = 100
    
    if (entregas == criterio && entrevistasTecnicas == criterio && presenca == criterio) {
        alert("O aluno " + name + " Possível monitor(a)")
    } else {
        alert("O aluno " + name + " Selecionar outro(a) aluno(a)");
    }
}

    monitor() */

//Exercício 3
//Desenvolva uma função que recebe três variáveis com valores numéricos e identifica qual deles é o maior.

/* function maior() {
    let numero_1 = parseInt(prompt("Digite o primeiro valor."))
    let numero_2 = parseInt(prompt("Digite o segundo valor."))
    let numero_3 = parseInt(prompt("Digite o terceiro valor."))

    if (numero_1 > numero_2 && numero_1 > numero_3) {
        alert (`o maior numero é ${numero_1}`)

    } else if (numero_2 > numero_1 && numero_2 > numero_3) {
        alert (`o maior numero é ${numero_2}`)

    } else if (numero_3 > numero_1 && numero_3 > numero_2) {
        alert (`o maior numero é ${numero_3}`)
    }
}
maior() */

//Exercício 4
//Desenvolva uma função para mostrar no console a seguinte frase: "Meu nome é -nome e sobrenome-, e tenho -idade- anos".

//Declare as seguintes variáveis dentro da função:


//Dica: Você pode utilizar template string. 



function minhaFrase(){
    let nome = prompt("Nome");
    let sobrenome = prompt("sobrenome");
    let idade = prompt("idade");

    alert(`meu nome é ${nome} ${sobrenome}, e eu tenho ${idade} anos.`)
}

minhaFrase();