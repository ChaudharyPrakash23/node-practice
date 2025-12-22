const http=require("http");
const port=3000;

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("welcome to my new server");
        res.end();;
    }
    if(req.url==="/about"){
        res.setHeader("Content-Type","text/html")
        res.write("<h1>testing about page</h1>");
        res.end();
    }
});

server.listen(port,()=>{
    console.log(`server is listening in port ${port}`);
})