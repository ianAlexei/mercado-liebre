

const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));


app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.get("/crear-cuenta", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/crear-cuenta.html"));
});




app.listen(3000, () => console.log("Servidor Express en funcionamiento en el puerto 3000"));




