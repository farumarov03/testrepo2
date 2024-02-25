var counter = 0;
var min = 1;
var max = 10;
var res;
var idx = 0;

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function getRndVal() {
    min = document.getElementById("min").value;
    max = document.getElementById("max").value;
    let tm = setInterval(() => document.getElementById('result').innerHTML = randomNumber(min, max), 50);
    setTimeout(() => {
        clearInterval(tm);
        console.log('stop');
    }, 500);
    return document.getElementById('result').innerHTML;
}



function rightClick(fList) {
    const element = document.getElementById("btn");
    element.addEventListener('contextmenu', (event) => {
        let tm = setInterval(() => document.getElementById('result').innerHTML = randomNumber(min, max), 50);
        setTimeout(() => {
            clearInterval(tm);
            console.log(idx);
            console.log(fList.length - 1)
            if (idx > fList.length - 1) {
                idx = 0;
            }
            document.getElementById('result').innerHTML = fList[0 + idx]
            idx += 1;
        }, 500);
        return document.getElementById('result').innerHTML;

    });
}
