const express= require('express');
const app = express();

app.get('/',(req,resp)=>{
    resp.send("I'm home page 🏡");
})

app.get('/about',(req,resp)=>{
    resp.send("I'm about page 💈");
})
app.get('/contacts',(req,resp)=>{
    resp.send("I'm contact page 📞");
})

app.listen(4500,console.log('Im listening on port 4500'));