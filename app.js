const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('./models/home');
const Home = mongoose.model('Home');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type, Authorization');
    app.use(cors());
    next();
})

mongoose.connect('mongodb://localhost/app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexão ok');
}).catch((erro) => {
    console.log('erro na conexao! ' + erro);
});

app.get('/home', (req, res) => {
    Home.findOne({}).then((home) => {
        return res.json(home);
    }).catch((err) => {
        return res.json({
            error: false,
            message: 'Nenhum registro encontrado'
        });
    })

});

app.post('/home', (req, res) => {
    Home.create(req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: 'Erro: conteúdo não pode ser cadastrado'
        })
    })
    return res.json({
        error: false,
        message: 'conteúdo cadastrado com sucesso!'
    })
})

app.listen(8080, () => {
    console.log("starting at the port 8080");
});