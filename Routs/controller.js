const express=require('express');
const app=express.Router()
const passport = require('passport');
const session=require('express-session')
require('../Auth/auth')

function isLoggedIn(req,res,next){
    req.user ? next():res.sendStatus(401);
}

app.use(session({secret:'cats'}));
app.use(passport.initialize());
app.use(passport.session());


app.get('/',(req,res)=>{
    res.send('<a href="/auth/google">Authentication with Google</a>')
})

app.get('/auth/google',
   passport.authenticate('google',{scope:['email','profile']})
);

app.get('/google/callback',
    passport.authenticate('google',{
        successRedirect:'/protected',
        failureRedirect:'/auth/failure'

    })
);


app.get('/auth/failure',(req,res)=>{
    res.send('somthing wrong...')
})


app.get('/protected',isLoggedIn,(req,res)=>{
    res.send("<h1>wellcome to gmail page</h1>")
})


module.exports=app;