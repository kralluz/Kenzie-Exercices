let a = 0
let b = 0
let c = 0
let voto

while (voto !== "x") {
    voto = prompt("Digite em qual candidato votar ou digite x para sair da votação")

    if (voto === "a") {
        a = a + 1
    } else if (voto === "b") {
        b = b + 1
    } else if (voto === "c") {
        c = c + 1
    } else {
        alert("Candidato não encontrado")
    }

    if (voto === "x"){
        alert(`candidato a obteve ${a} votos \n candidato b obteve ${b} votos \n candidato c obteve ${c} votos \n`)
    }
}
