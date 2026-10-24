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

app.get('/admin/getAllData',(req,res)=>{
    // try{
throw new Error('ssafasf')
        res.send('All data sent')
        next();
    // }
    // catch(err){
    //     res.send('something went wrong')
    // }
})

app.use('/',(err,req,res,next)=>{
    if(err){
        res.status(500).send('something went wrong')
    }
})





app.listen(3000,()=>{
    console.log('server listening on the port 3000')
})