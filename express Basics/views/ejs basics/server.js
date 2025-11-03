const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/',(req,resp)=>{
  resp.render('index',{title:'Home ||Page',content:'welcome to Home page 🏠'});
})
app.get('/about',(req,resp)=>{
     resp.render('about',{title:'About ||Page',content:'welcome to About page 🏠'});
})

app.get('/contact',(req,resp)=>{
     resp.render('contacts',{title:'Contact ||Page',content:'welcome to Contact page 🏠'});
})




app.listen(3500,console.log('m im getting it from 3500 port'));