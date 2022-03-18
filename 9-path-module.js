const path= require('path');
// to show the path separator in os 
console.log(path.sep);

// to get a file path by joing the file names  
const filePath=path.join('\ ','node','subfolder','test.txt');
console.log(filePath);
// to find the destination file from the file path 
const base=path.basename(filePath);
console.log(base);
// to get the absolute path of the file  
const absolute = path.resolve(__dirname,'subfolder','test.txt');
console.log(absolute);