import http from "http";
import { readFile } from "fs/promises";
import path from "path";

const port = 3002;

const server = http.createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/") {
    try {
      const data = await readFile(path.join(process.cwd(), "urlshortner.html"));
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    } catch (error) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 page not found");
    }
  }
  if(req.method===" post" && req.url==="/"){
    const body=""
    req.on("data",(chunk)=>{
       body=body+chunk;
    })
    req.end("end",()=>{
        console.log(body);
        const{url,url_short}=JSON.parse(body);
        
        if(!url){
        res.writeHead(400,{"Content-Type":"text/plain"});
        return res.end("url not is required");
    }
    })
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
