let fs = require('fs')

let total = 0

// the io cycle
fs.readFile('/indexjs', ()=>{
    // LASTLY THE setTimeout IS LAST 
    setTimeout(print2, 0)
    // THEN FOLLOWS setImmediate
    setImmediate(print3)
})

// setTimeout(print2, 0)
// setImmediate(print3)

let number = 1
//THIS IS BEANG FIRST|=
print1()

function print1() {
    total = number * 10;
    console.log("total 1 NOMARL: ", total)
    number++;
}

function print2() {
    total = number * 10;
    console.log("total 2 SETT TIMEOUT: ", total)
}

function print3() {
    total = number * 10;
    console.log("total 3 SET IMMEDIATE: ", total)
}