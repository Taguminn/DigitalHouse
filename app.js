const express = require('express');
const app = express();
const port= process.env.Port || 3000;
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.post("/register",(req,res) =>{ res.redirect("https://localhost:3000") })
app.post("/login",(req,res) =>{ res.redirect("https://localhost:3000") })

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.listen(port, ()=>{
    console.log("Rum Rum Rum");
});