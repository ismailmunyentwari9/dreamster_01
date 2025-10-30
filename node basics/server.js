const http = require('http');

const server = http.createServer((req,resp)=>{
 if(req.url==='/home'){
    resp.writeHead(200,{'Content-Type':'text/plain'});
    resp.end("Im Home Page 🏡");
 }
 else if(req.url==='/about'){
    resp.writeHead(200,{'Content-Type':'text/plain'});
    resp.end("Im abaout Page 📩");
 }
 else if(req.url==='/contact'){
    resp.writeHead(200,{'Content-Type':'text/plain'});
    resp.end('Im contant Page 📞 ');
 }
 else{
    resp.writeHead(404,{'Content-Type':'text/plain'});
    resp.end("Page Not Found 😎");
 }
});

server.listen(5000,console.log('Im listerning On Port 5000'));