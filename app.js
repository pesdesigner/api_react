const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('./models/home');
const Home = mongoose.model('Home');

mongoose.connect('mongodb://localhost/app_react', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexão ok');
}).catch((erro) => {
    console.log('erro na conexao! ' + erro);
});

app.get('/home', (req, res) => {
    return res.json({
        error: false,
        message: 'informações da página home'
    });
}) 

app.listen(8080, () => {
    console.log("starting at the port 8080");
});