const express =require('express');
const path = require('path');

const app =express();
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,resp)=>{
resp.sendFile(path.join(__dirname,'index.html'));
})

app.get('/about',(req,resp)=>{
resp.sendFile(path.join(__dirname,'about.html'));
})


// .............Usinf Static method..................





app.listen(3000,console.log('im listening on port 3000'));

// console.log(__dirname);