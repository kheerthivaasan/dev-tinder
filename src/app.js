const express=require('express');

const app=express();


app.use('/user',(req,res,next)=>{
    console.log('route handler user1');
    res.send('handler1');
    next()
},
(req,res)=>{
console.log('route handler 2');
res.send('handler 2')
}

)

app.get('/admin',
    [(req,res,next)=>{
    console.log('route handler 1');
    // res.send('handler 1')
    next();
},(req,res,next)=>{
    console.log('route handler 2');
    // res.send('handler 1');
    next();
},(req,res,next)=>{
    console.log('route handler 3');
    // res.send('handler 1')
    next();
},(req,res,next)=>{
    console.log('route handler 4');
    res.send('handler 4')
}])


app.listen(3000,()=>{
    console.log('server is listening on the port 3000   ')
})