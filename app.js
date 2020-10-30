const express = require('express');
const app = express();

app.use('/home', (req, res) => {
    return res.json({
        error: false,
        message: 'informações da página home'
    });
}) 

app.listen(8080, () => {
    console.log("starting at the door 8080");
});