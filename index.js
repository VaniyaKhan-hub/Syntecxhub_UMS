const http=require('http');
const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const userRoutes=require('./Routes/userRoutes');
const app=express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',userRoutes)

//db connection
mongoose.connect('mongodb://localhost:27017/UMS').then(()=>console.log('DB Connected')).catch(err=>console.log('DB Connection Error:', err));

http.createServer(app).listen(3000,()=>{
    console.log('Server running on http://localhost:3000');
});



