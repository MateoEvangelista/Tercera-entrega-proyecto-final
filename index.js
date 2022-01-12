const http=require('http');
const express=require('express');
const app=express();

/*Recursos*/
app.use(express.static(__dirname+'/'));

/*Enrutamiento*/
app.get('/',(req,res) => {
    res.render('index.html');
});

app.listen(4000);

console.log('Servidor corriendo en el puerto 5000')