const express=require('express');

const app=express();

app.use('/',(req,res)=>{
res.send('hello from the app')
})

app.listen(3,()=>{
    console.log('server is listening on the port 300')
})