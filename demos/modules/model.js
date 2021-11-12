// rewuiers.ecport, model, _filename, _dirname

// print directory and file name
console.log('direcory name: ', __dirname)
console.log('file name: ', __filename)

let accountHolderNames = ['vusi', 'nosipho', 'jimmy']
let accountAmount = [1500, 5400, 10000]

module.exports.accountHolderNames = accountHolderNames
module.exports.accountAmount = accountAmount


console.log(exports)
