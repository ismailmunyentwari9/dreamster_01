const http = require('http');
const fs =require('fs');

const server= http.createServer((req,resp)=>{
  if(req.url==='/'){
    fs.readFile('./pages/index.html',(err,data)=>{
   if(err){
    resp.writeHead(500,{'Content-Type':'text/plain'});
    resp.end("Internal Server Error");
   }
   else{
    resp.writeHead(200,{'Content-Type':'text/html'});
    resp.end(data);
   }
    })
  }
  else if(req.url==='/about'){
    fs.readFile('./pages/about.html',(err,data)=>{
        if(err){
          resp.writeHead(500,{'Content-Type':'text/plain'});
          resp.end('Internal Server Error');
        }
        else{
          resp.writeHead(200,{'Content-Type':'text/html'});
          resp.end(data);
        }
    })
  }
  else if(req.url==='/contact'){
    fs.readFile('./pages/contact.html',(err,data)=>{
        if(err){
          resp.writeHead(500,{'Content-Type':'text/plain'});
          resp.end('Internal Server Error');
        }
        else{
          resp.writeHead(200,{'Content-Type':'text/html'});
          resp.end(data);
        }
    })
  }
  else{
    fs.readFile('./pages/404.html',(err,data)=>{
       if(err){
        resp.writeHead(500,{'Content-Type':'text/plain'});
        resp.end("Internal Server Error");
       }
       else{
        resp.writeHead(404,{'Content-Type':'text/html'});
        resp.end(data);
       }
    })
    
  }
})

const Port =4000
server.listen(Port,()=>{
  console.log("Im' listening on Port 4000");
});