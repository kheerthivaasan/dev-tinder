const express=require('express');

const app=express();

const {adminAuth,userAuth}=require("../middlewares/auth")

app.use('/admin',adminAuth)

app.get('/user',userAuth,(req,res)=>{
    res.send('user data fetched')
})

app.post('/user/login',(req,res)=>{
    res.send('user logged in')
})

app.get('/admin/getAlldata',(req,res)=>{
    res.send('admin get all data')
})


app.listen(3000,()=>{
    console.log('server is listening on the port 3000   ')
})