const express=require('express');
const app =express();

const {adminAuth,userAuth}=require('../middlewares/auth')

app.use('/admin',adminAuth);

app.post('/user/login',(req,res)=>{
    res.send('user logged in successfully!')
})


app.get('/user',userAuth,(req,res)=>{
    res.send('user data fetched')
})

app.get('/admin/getAllData',(res,req)=>{
    res.send('All data sent')
})



app.listen(3000,()=>{
    console.log('server listening on the port 3000')
})