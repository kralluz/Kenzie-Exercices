/* Exercício 1
Desenvolva uma função chamada verticalText, que receberá uma string como parâmetro. A função deverá imprimir a palavra de forma vertical usando o console.log. */

function verticalText(str) {
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}

function incrementText(str) {
    for (let i = 1; i <= str.length; i++) {
        console.log(str.slice(0, i));
    }
}


function incrementTextBackwards(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        console.log(str.slice(i));
    }
}

function padEnd(str, count, char) {
    const diff = count - str.length;
    if (diff <= 0) {
        return str;
    }
    const repeatedChars = char.repeat(diff);
    return str + repeatedChars;
}


function subString(str, start, end) {
    return str.slice(start, end);
}


function stringRepeater(str, count) {
    let result = "";
    for (let i = 0; i < count; i++) {
        result += str;
    }
    return result;
}

function stringCentralizer(str, count, char) {
    let totalChars = count - str.length;
    let leftChars = Math.floor(totalChars / 2);
    let rightChars = totalChars - leftChars;
    let result = char.repeat(leftChars) + " " + str + " " + char.repeat(rightChars);
    return result;
}

