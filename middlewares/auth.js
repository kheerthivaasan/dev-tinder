const adminAuth=(req,res,next)=>{
    let token='xyz';
    let isAuthorization = token==='xyz'
    if(isAuthorization){
        console.log('admin authorized')
        next()
    }
    else{
        res.status(401).send('unauthorized')
    }
}

const userAuth=(req,res,next)=>{
    let token='xyz';
    let isAuthorization = token==='xyz'
    if(isAuthorization){
        console.log('user authorized')
        next()
    }
    else{
        res.status(401).send('unauthorized')
    }
}

module.exports={adminAuth,userAuth}