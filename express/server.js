import express from "express"
const server=express();
const port=3000;

server.get('/',(req,res)=>{
    res.write("hello this is express server");
})
server.listen(port,()=>{
    console.log(`server is running in port ${port}`);
})