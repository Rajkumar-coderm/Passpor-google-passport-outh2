const express=require('express');
const app=express()
app.use(express.json())

app.use('/',require('./Routs/controller'))


app.listen(5000,()=>{
    console.log("server start port noumber 5000");
})
