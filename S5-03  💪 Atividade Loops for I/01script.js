function renderUpToTwenty(){
    for (let n = 0; n <= 20; n ++){
        console.log(n)
    }
}









function tenInTenToAHundred(){
    for (let n = 0; n <= 100; n +=10){
        console.log(n)
}
}



function oddUpToTwenty(){
    for (let n = 0; n <= 20; n++){
        if (n % 2 != 0){
            console.log(n)
        }
    }
}



function venUpToTwenty(){
    for (let n = 0; n <= 20; n++){
        if (n % 2 == 0){
            console.log(n)
        }
    }
}



function fromNegativeToPositive(){
    for (let n = -10; n <= 0; n++){
        console.log(n)
    }
}

function inDescendingDirection(){
    for (let n = 10; n>=0; n--){
        console.log(n)
    }
}


function toSquare(){
    for (let n = 0; n <= 10; n++){
        console.log(n*n)
    }
}

toSquare()