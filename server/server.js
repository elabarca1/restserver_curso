require('./config/config');

const express = require('express');
const app = express();

// Definicion bodyParser
const bodyParser = require('body-parser')
    // create application/json parser
app.use(bodyParser.json());
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/usuario', function(req, res) {
    res.json('get usuario')
})

app.post('/usuario', function(req, res) {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "En nombre es necesario"
        })
    } else {
        res.json({
            persona: body
        });
    }

})

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });
})

app.delete('/usuario', function(req, res) {
    res.json('delete usuario')
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando por el Puerto:', process.env.PORT);
});