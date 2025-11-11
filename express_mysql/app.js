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

        app.post('/delete/:student_id',(req,resp)=>{
            // console.log(req.params);
            const studentId= req.params.student_id;
            const sql=`DELETE FROM students WHERE student_id=${studentId}`
            db.query(sql,(err)=>{
                if(err){
                    console.log("Failed to delete student");
                    return;
                }
                else{
                    resp.redirect('/datas');
                }
            })
        })


        app.post('/update/:student_id',(req,resp)=>{
            const studentId =req.params.student_id;
            const sql =`SELECT * FROM students WHERE student_id =${studentId}`;
            db.query(sql,(err,dataSelected)=>{
               if(err){
                console.log("failed to fetach db datas");
               }
               else{
                resp.render('updateForm',{dataSelected});
               }
            })
        })

        app.get('/update',(req,resp)=>{
            resp.render('updateForm')
        })


        app.post('/updated/:id',(req,resp)=>{
            const id =req.params.id;
            const {names,email,age,grade}=req.body
            const sql =`UPDATE students SET names='${names}',email='${email}',age='${age}',grade='${grade}' WHERE student_id=${id}`;

            db.query(sql,(err)=>{
                if(err){
                    console.log('FAILED TO UPDATE STUDENT');
                    return;
                }
                else{
                    resp.redirect('/datas');
                }
            })
        })


app.listen(3000,console.log('Im listening on Port 3k'));
