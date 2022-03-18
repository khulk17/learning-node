const {readFile, writeFile} = require('fs');
readFile("./content/first.txt","utf8",(err,result)=>{
    if (err){
        console.log(err)
        console.log("ERROR")
        return;
    }
    const first=result;
    readFile("./content/subfolder/second.txt","utf8",(err2, result2)=>{
        if (err2){
            console.log(err2)
            console.log("ERROR")
            return;
        }
        const second=result2;
        console.log(second);
        writeFile("./content/result-async.txt",`Here is the data from first and second ${first} and ${second}`,(err,result)=>{
            if (err){
                console.log(err)
                console.log("ERROR")
                return;
            }
        });   
    })
})