const express = require('express');
const mysql = require('mysql');
const bodyParser= require('body-parser');



const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

const db =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'student_db'
});

db.connect( err=>{
    if(err){
        console.log("FAILED TO CONNECT...");
        return;
    }
    else{
        console.log("Welll connected");
    }
})



app.get('/',(req,resp)=>{
   resp.render('form'); 
})
app.post('/add',(req,resp)=>{

    // console.log(req.body);
    const{names,age,email,grade}=req.body
    const sql =`INSERT INTO students (names,age,email,grade) VALUES('${names}',${age},'${email}','${grade}')`;
    db.query(sql,(err)=>{
        if(err){
            console.log('Failed To add data..');
            return
        }
        else{
            console.log("data Inserted successfuly");
            resp.redirect('/datas');
        }



       
    })
})

 app.get('/datas',(req,resp)=>{
            const sql ='SELECT * FROM students';
             db.query(sql,(err,results)=>{
                if(err){
                    console.log("Failed To fetch from db..");
                }
                else{
                   
                     resp.render('datas',{results});
                }
             })
           
        })


app.listen(3000,console.log('Im listening on Port 3k'));
