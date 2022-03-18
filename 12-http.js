const http=require('http');
/// req-- represents the incoming request 
/// res - represents the responce which we will be sending back
const server=http.createServer((req,res)=>{
    
    if (req.url === "/"){
        res.end(`Welcome to our home page`)
    }
    if (req.url === "/about"){
        res.end(`Here is our Short History`)
    }
    res.end(`
    <h1>Ooops!</h1>
    <p>We can't seem to find the page you are looking for </p>
    <a href="/"> Back Home</a>
    `)
})

server.listen(5000)