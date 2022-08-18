
function countdown(){ 
    console.log(x);
    x--; 
    if (x<0){
        clearTimeout(timer);
    }
    else {
        timer = setTimeout(countdown, 1000);
    }
}

let timer;
let x =10
countdown(); // вызов функции

