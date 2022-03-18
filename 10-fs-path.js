/// during syncronous approch javascript reads the file line by line 

const {readFileSync,writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt',"utf8")
const second= readFileSync('./content/subfolder/second.txt',"utf8")

console.log(first)
console.log(second)

writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`)
// if the file result-sync.txt does'nt exist the node will create and write
// else tif the file exists the node will override and write the file 

// if we want append data into the existing file 
writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`,{flag:'a'})